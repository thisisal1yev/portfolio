import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

import { validateContact } from '@shared/lib'

interface Props {
  onSuccess: () => void
  onClose: () => void
}

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

export function ContactForm({ onSuccess, onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
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
    const clientError = validateContact(form)
    if (clientError) {
      setError(clientError)
      setStatus('error')
      return
    }
    setStatus('loading')
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'delivery failed')
        setStatus('error')
        return
      }
      onSuccess()
    } catch {
      setError('network error')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className='flex h-full flex-col gap-3 p-6 sm:p-5'>
      <div className='flex items-center justify-between'>
        <span className='text-sm text-acc'>./send.sh</span>
        <button
          type='button'
          onClick={onClose}
          aria-label='close form'
          className='rounded-sm p-1 text-text-dim transition-colors hover:text-acc'
        >
          <X size={16} />
        </button>
      </div>

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
        <label key={f.name} className='flex flex-col gap-1 text-xs'>
          <span className='font-mono text-text-muted'>{f.label}</span>
          <input
            ref={i === 0 ? firstRef : undefined}
            type={f.type}
            value={form[f.name]}
            onChange={set(f.name)}
            placeholder={f.placeholder}
            disabled={status === 'loading'}
            className='rounded-sm border border-border bg-bg-deep/40 px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-dim focus-visible:border-acc-dim focus-visible:ring-1 focus-visible:ring-acc-dim'
          />
        </label>
      ))}

      <label className='flex flex-1 flex-col gap-1 text-xs'>
        <span className='font-mono text-text-muted'>message</span>
        <textarea
          value={form.message}
          onChange={set('message')}
          placeholder='Tell me about your project…'
          disabled={status === 'loading'}
          rows={4}
          className='min-h-24 flex-1 resize-none rounded-sm border border-border bg-bg-deep/40 px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-dim focus-visible:border-acc-dim focus-visible:ring-1 focus-visible:ring-acc-dim'
        />
      </label>

      <div aria-live='polite' className='min-h-4 text-xs'>
        {status === 'error' && error && (
          <span className='text-magenta'>✗ error: {error}</span>
        )}
      </div>

      <button
        type='submit'
        disabled={status === 'loading'}
        className='bracket inline-flex items-center justify-center gap-2 border border-acc-dim bg-acc/10 px-5 py-2.5 text-sm text-acc transition-colors hover:bg-acc/20 disabled:opacity-60'
      >
        {status === 'loading' ? 'sending…' : 'send message'}
      </button>
    </form>
  )
}
