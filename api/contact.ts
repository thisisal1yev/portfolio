// Vercel Node serverless function (Web handler). Thin wrapper: parse the JSON
// body, hand off to the host-agnostic core with env secrets, return its result.
import { handleContact } from '../src/shared/lib/contact.js'

export async function POST(req: Request): Promise<Response> {
  let input: unknown
  try {
    input = await req.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid json' }, { status: 400 })
  }

  const { status, body } = await handleContact(input as Record<string, unknown>, {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
  })
  return Response.json(body, { status })
}
