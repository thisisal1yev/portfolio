import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import type {} from 'vite-react-ssg'

import { handleContact } from './src/shared/lib/contact'

// Dev-only middleware so `bun run dev` can exercise POST /api/contact without
// `vercel dev`. Production uses api/contact.ts on Vercel.
function contactDevApi(env: Record<string, string>): Plugin {
  return {
    name: 'dev-api-contact',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method !== 'POST') return next()
        void (async () => {
          const chunks: Buffer[] = []
          for await (const c of req) chunks.push(c as Buffer)
          let input: unknown
          try {
            input = JSON.parse(Buffer.concat(chunks).toString() || '{}')
          } catch {
            res.statusCode = 400
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'invalid json' }))
            return
          }
          const { status, body } = await handleContact(input as Record<string, unknown>, {
            botToken: env.TELEGRAM_BOT_TOKEN,
            chatId: env.TELEGRAM_CHAT_ID,
          })
          res.statusCode = status
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(body))
        })()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), contactDevApi(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@widgets': path.resolve(__dirname, 'src/widgets'),
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },
    ssgOptions: {
      entry: 'src/app/main.tsx',
      beastiesOptions: {
        preload: 'swap',
      },
    },
  }
})
