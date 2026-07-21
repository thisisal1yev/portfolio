import { test, expect, mock } from 'bun:test'

import { handleContact, validateContact } from './contact'

const valid = { name: 'Ada', email: 'ada@mail.co', subject: 'Hi', message: 'Hello there' }

test('validateContact: valid input returns null', () => {
  expect(validateContact(valid)).toBeNull()
})

test('validateContact: missing name', () => {
  expect(validateContact({ ...valid, name: '   ' })).toBe('name is required')
})

test('validateContact: invalid email', () => {
  expect(validateContact({ ...valid, email: 'nope' })).toBe('invalid email')
})

test('validateContact: message too long', () => {
  expect(validateContact({ ...valid, message: 'x'.repeat(2001) })).toBe('message is too long')
})

test('handleContact: honeypot filled → 200 and no send', async () => {
  const f = mock(async () => new Response('{}'))
  const r = await handleContact({ ...valid, website: 'bot' }, { botToken: 't', chatId: 'c' }, f as unknown as typeof fetch)
  expect(r.status).toBe(200)
  expect(f).toHaveBeenCalledTimes(0)
})

test('handleContact: invalid input → 400 and no send', async () => {
  const f = mock(async () => new Response('{}'))
  const r = await handleContact({ ...valid, email: 'bad' }, { botToken: 't', chatId: 'c' }, f as unknown as typeof fetch)
  expect(r.status).toBe(400)
  expect(f).toHaveBeenCalledTimes(0)
})

test('handleContact: missing config → 500 and no send', async () => {
  const f = mock(async () => new Response('{}'))
  const r = await handleContact(valid, {}, f as unknown as typeof fetch)
  expect(r.status).toBe(500)
  expect(f).toHaveBeenCalledTimes(0)
})

test('handleContact: telegram non-ok → 502', async () => {
  const f = mock(async () => new Response('bad', { status: 400 }))
  const r = await handleContact(valid, { botToken: 't', chatId: 'c' }, f as unknown as typeof fetch)
  expect(r.status).toBe(502)
})

test('handleContact: happy path sends correct request and returns 200', async () => {
  const calls: { url: string; init: RequestInit }[] = []
  const f = mock(async (url: string, init: RequestInit) => {
    calls.push({ url, init })
    return new Response('{"ok":true}', { status: 200 })
  })
  const r = await handleContact(valid, { botToken: 'TOK', chatId: 'CHAT' }, f as unknown as typeof fetch)
  expect(r.status).toBe(200)
  expect(calls[0].url).toBe('https://api.telegram.org/botTOK/sendMessage')
  const payload = JSON.parse(calls[0].init.body as string)
  expect(payload.chat_id).toBe('CHAT')
  expect(payload.parse_mode).toBe('HTML')
  expect(payload.text).toContain('Hi')
  expect(payload.text).toContain('Hello there')
})

test('escapeHtml is applied to message content', async () => {
  const calls: { init: RequestInit }[] = []
  const f = mock(async (_url: string, init: RequestInit) => {
    calls.push({ init })
    return new Response('{"ok":true}', { status: 200 })
  })
  await handleContact({ ...valid, message: 'a < b & c' }, { botToken: 'TOK', chatId: 'CHAT' }, f as unknown as typeof fetch)
  const payload = JSON.parse(calls[0].init.body as string)
  expect(payload.text).toContain('a &lt; b &amp; c')
})
