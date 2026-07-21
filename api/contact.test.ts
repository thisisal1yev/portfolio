import { test, expect, mock, afterEach } from 'bun:test'

import { POST } from './contact'

afterEach(() => {
  delete process.env.TELEGRAM_BOT_TOKEN
  delete process.env.TELEGRAM_CHAT_ID
})

test('POST: valid body with env configured → 200 ok', async () => {
  process.env.TELEGRAM_BOT_TOKEN = 'TOK'
  process.env.TELEGRAM_CHAT_ID = 'CHAT'
  const orig = globalThis.fetch
  globalThis.fetch = mock(async () => new Response('{"ok":true}', { status: 200 })) as unknown as typeof fetch
  try {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Ada', email: 'ada@mail.co', subject: 'Hi', message: 'Hello' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })
  } finally {
    globalThis.fetch = orig
  }
})

test('POST: malformed JSON body → 400', async () => {
  process.env.TELEGRAM_BOT_TOKEN = 'TOK'
  process.env.TELEGRAM_CHAT_ID = 'CHAT'
  const req = new Request('http://localhost/api/contact', { method: 'POST', body: 'not json' })
  const res = await POST(req)
  expect(res.status).toBe(400)
})
