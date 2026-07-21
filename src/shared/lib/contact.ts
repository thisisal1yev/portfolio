// Host-agnostic contact-form core: validate input, drop honeypot hits, and
// deliver the message to Telegram. No Vercel/Vite/DOM imports — callers inject
// env + fetch so this stays testable and portable.

export interface ContactInput {
  name?: string
  email?: string
  subject?: string
  message?: string
  /** honeypot — real users never fill this */
  website?: string
}

export interface ContactEnv {
  botToken?: string
  chatId?: string
}

export type ContactResult =
  | { status: 200; body: { ok: true } }
  | { status: 400 | 405 | 500 | 502; body: { ok: false; error: string } }

const LIMITS = { name: 80, email: 120, subject: 120, message: 2000 } as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Returns an error message, or null when the input is valid. Shared by client + server. */
export function validateContact(input: ContactInput): string | null {
  const fields = ['name', 'email', 'subject', 'message'] as const
  for (const f of fields) {
    if (!input[f] || !input[f]!.trim()) return `${f} is required`
  }
  if (!EMAIL_RE.test(input.email!.trim())) return 'invalid email'
  for (const f of fields) {
    if (input[f]!.trim().length > LIMITS[f]) return `${f} is too long`
  }
  return null
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function handleContact(
  input: ContactInput,
  env: ContactEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<ContactResult> {
  // 1. Honeypot: pretend success so bots don't retry.
  if (input.website && input.website.trim() !== '') {
    return { status: 200, body: { ok: true } }
  }

  // 2. Validation.
  const error = validateContact(input)
  if (error) return { status: 400, body: { ok: false, error } }

  // 3. Config guard.
  if (!env.botToken || !env.chatId) {
    return { status: 500, body: { ok: false, error: 'not configured' } }
  }

  // 4. Deliver to Telegram.
  const text =
    `📬 New message — thisisaliyev.dev\n` +
    `👤 ${escapeHtml(input.name!.trim())}\n` +
    `✉️ ${escapeHtml(input.email!.trim())}\n` +
    `📌 ${escapeHtml(input.subject!.trim())}\n` +
    `———\n` +
    `${escapeHtml(input.message!.trim())}`

  try {
    const res = await fetchImpl(`https://api.telegram.org/bot${env.botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })
    if (!res.ok) return { status: 502, body: { ok: false, error: 'delivery failed' } }
    return { status: 200, body: { ok: true } }
  } catch {
    return { status: 502, body: { ok: false, error: 'delivery failed' } }
  }
}
