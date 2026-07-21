import { useRef, useEffect, useState } from 'react'
import { m } from 'motion/react'
import { X } from 'lucide-react'

import { EASE, validateContact } from '@shared/lib'
import { TypeWriter } from '@shared/components'

import { StatusOverlay, type StatusResult } from './StatusOverlay'

interface Props {
  onClose: () => void
}

const OK_MESSAGE = "Message sent — I'll get back to you soon."
const FAIL_MESSAGE = 'Message didn’t go through. Give it another shot.'
const NET_MESSAGE = 'Couldn’t reach the server. Check your connection.'

const FIELDS = [
  { name: 'name', label: 'name', type: 'text', placeholder: 'Ada Lovelace' },
  { name: 'email', label: 'email', type: 'email', placeholder: 'ada@mail.com' },
  { name: 'subject', label: 'subject', type: 'text', placeholder: 'Project inquiry' },
] as const

type FormState = {
  name: string
  email: string
  subject: string
  message: string
  website: string
}

const EMPTY: FormState = { name: '', email: '', subject: '', message: '', website: '' }

type Tone = 'dim' | 'ok' | 'err'
interface LogLine {
  text: string
  tone: Tone
}

const TONE: Record<Tone, string> = {
  dim: 'text-text-dim',
  ok: 'text-acc',
  err: 'text-magenta',
}

/** rows boot in from the left one by one, like terminal output printing */
const row = (i: number) => ({
  initial: { opacity: 0, x: -14 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, delay: 0.05 + i * 0.07, ease: EASE },
})

export function ContactForm({ onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [log, setLog] = useState<LogLine[]>([])
  const [typed, setTyped] = useState(0)
  const [result, setResult] = useState<StatusResult | null>(null)
  const firstRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstRef.current?.focus()
  }, [])

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    const clientError = validateContact(form)
    if (clientError) {
      setStatus('error')
      setTyped(0)
      setLog([
        { text: '$ ./send.sh', tone: 'dim' },
        { text: `✗ error: ${clientError} — exit 1`, tone: 'err' },
      ])
      return
    }

    setStatus('loading')
    setTyped(0)
    setLog([
      { text: '$ ./send.sh', tone: 'dim' },
      { text: '> validating… ok', tone: 'dim' },
      { text: '> POST /api/contact …', tone: 'dim' },
    ])

    // The status code lands as a pixel overlay 300ms after the response.
    const reveal = (r: StatusResult) =>
      setTimeout(() => {
        setResult(r)
        setStatus(r.ok ? 'sent' : 'error')
      }, 300)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      const ok = res.ok && data.ok
      reveal({ code: res.status, ok, message: ok ? OK_MESSAGE : FAIL_MESSAGE })
    } catch {
      reveal({ code: 0, ok: false, message: NET_MESSAGE })
    }
  }

  const retry = () => {
    setResult(null)
    setStatus('idle')
    setLog([])
    setTyped(0)
  }

  const busy = status === 'loading' || status === 'sent'

  return (
    <m.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: EASE }}
      onSubmit={onSubmit}
      className='relative flex h-full flex-col font-mono'
    >
      {/* window titlebar */}
      <m.div
        {...row(0)}
        className='flex items-center justify-between border-b border-border px-4 py-2.5'
      >
        <div className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-dot-red' />
          <span className='h-2.5 w-2.5 rounded-full bg-dot-amber' />
          <span className='h-2.5 w-2.5 rounded-full bg-dot-green' />
          <span className='ml-2 text-xs text-text-dim'>send.sh — zsh</span>
        </div>
        <button
          type='button'
          onClick={onClose}
          aria-label='close form'
          className='rounded-sm p-1 text-text-dim transition-colors hover:text-acc'
        >
          <X size={15} />
        </button>
      </m.div>

      <div className='flex flex-1 flex-col gap-2.5 p-5 sm:p-4'>
        {/* prompt line */}
        <m.div {...row(1)} className='text-xs'>
          <span className='text-acc'>$</span>{' '}
          <TypeWriter
            text='./send.sh --interactive'
            immediate
            speed={36}
            className='text-text-muted'
          />
        </m.div>

        {/* honeypot — visually hidden, not announced */}
        <input
          type='text'
          name='website'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
          value={form.website}
          onChange={set('website')}
          className='absolute left-[-9999px] h-0 w-0 opacity-0'
        />

        {FIELDS.map((f, i) => (
          <m.label
            key={f.name}
            {...row(2 + i)}
            className='flex items-center gap-2 text-xs'
          >
            <span className='text-text-dim'>~</span>
            <span className='w-16 shrink-0 text-text-muted'>{f.label}</span>
            <span className='text-acc'>▸</span>
            <input
              ref={i === 0 ? firstRef : undefined}
              type={f.type}
              value={form[f.name]}
              onChange={set(f.name)}
              placeholder={f.placeholder}
              disabled={busy}
              className='min-w-0 flex-1 border-0 border-b border-border bg-transparent pb-0.5 text-sm text-text caret-acc outline-none transition-colors placeholder:text-text-dim focus:border-acc-dim disabled:opacity-60'
            />
          </m.label>
        ))}

        <m.label {...row(5)} className='flex flex-1 flex-col gap-1.5 text-xs'>
          <span className='flex items-center gap-2'>
            <span className='text-text-dim'>~</span>
            <span className='text-text-muted'>message</span>
            <span className='text-acc'>▸</span>
          </span>
          <textarea
            value={form.message}
            onChange={set('message')}
            placeholder='Tell me about your project…'
            disabled={busy}
            rows={4}
            className='min-h-20 flex-1 resize-none border-l-2 border-acc-dim/40 bg-transparent pl-3 text-sm text-text caret-acc outline-none transition-colors placeholder:text-text-dim focus:border-acc-dim disabled:opacity-60'
          />
        </m.label>

        {/* terminal log — prints line by line */}
        <m.div
          {...row(6)}
          aria-live='polite'
          className='min-h-8 space-y-0.5 text-xs'
        >
          {log.slice(0, typed).map((l, i) => (
            <div key={i} className={TONE[l.tone]}>
              {l.text}
            </div>
          ))}
          {log[typed] && (
            <div className={TONE[log[typed].tone]}>
              <TypeWriter
                key={typed}
                text={log[typed].text}
                immediate
                caret={false}
                speed={14}
                onDone={() => setTyped(n => n + 1)}
              />
            </div>
          )}
        </m.div>

        <m.button
          {...row(7)}
          type='submit'
          disabled={busy}
          className='bracket inline-flex items-center justify-center gap-2 border border-acc-dim bg-acc/10 px-5 py-2.5 text-sm text-acc transition-colors hover:bg-acc/20 disabled:opacity-60'
        >
          {status === 'loading'
            ? 'sending…'
            : status === 'sent'
              ? '✓ sent'
              : 'run ./send.sh'}
        </m.button>
      </div>

      {result && (
        <StatusOverlay
          code={result.code}
          ok={result.ok}
          message={result.message}
          onRetry={retry}
        />
      )}
    </m.form>
  )
}
