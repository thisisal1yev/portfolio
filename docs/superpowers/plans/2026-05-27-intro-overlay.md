# Intro Overlay Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Добавить full-screen intro-анимацию при загрузке страницы — текст «THISISALIYEV» разбивается на «THISIS» (влево) и «ALIYEV» (вправо), одновременно страница въезжает снизу.

**Architecture:** Отдельный компонент `IntroOverlay` рендерится поверх страницы через `AnimatePresence` в `main.tsx`. Состояние `introComplete` хранится в `App`-функции внутри `main.tsx`. После 500ms компонент сигнализирует о завершении, `AnimatePresence` запускает exit-анимацию текста (700ms), после чего компонент размонтируется. `Home` рендерится всегда, но въезжает снизу с `delay: 0.6s`.

**Tech Stack:** React 19, TypeScript, Motion v12 (`motion/react`), Tailwind CSS 4

---

## Файлы

| Действие | Путь |
|---|---|
| Создать | `src/widgets/IntroOverlay/ui/IntroOverlay.tsx` |
| Создать | `src/widgets/IntroOverlay/index.ts` |
| Изменить | `src/widgets/index.ts` |
| Изменить | `src/app/main.tsx` |

---

## Task 1: Создать компонент IntroOverlay

**Files:**
- Create: `src/widgets/IntroOverlay/ui/IntroOverlay.tsx`
- Create: `src/widgets/IntroOverlay/index.ts`
- Modify: `src/widgets/index.ts`

- [ ] **Step 1: Создать директорию и файл компонента**

Создать `src/widgets/IntroOverlay/ui/IntroOverlay.tsx`:

```tsx
import { useEffect } from 'react'
import { motion } from 'motion/react'

import { EASE } from '@shared/lib'

interface Props {
  onComplete: () => void
}

const LEFT_EXIT = { x: '-110vw', transition: { duration: 0.7, ease: EASE } }
const RIGHT_EXIT = { x: '110vw', transition: { duration: 0.7, ease: EASE } }
const ENTER_TRANSITION = { duration: 0.4, ease: EASE }

export function IntroOverlay({ onComplete }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(onComplete, 500)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.75, duration: 0 } }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-bg'
    >
      <div className='flex items-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: ENTER_TRANSITION }}
          exit={LEFT_EXIT}
          className='font-black italic uppercase leading-none tracking-[-0.05em] text-text text-[clamp(60px,10vw,140px)]'
        >
          THISIS
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: ENTER_TRANSITION }}
          exit={RIGHT_EXIT}
          className='font-black italic uppercase leading-none tracking-[-0.05em] text-text text-[clamp(60px,10vw,140px)]'
        >
          ALIYEV
        </motion.span>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2: Создать index.ts для экспорта**

Создать `src/widgets/IntroOverlay/index.ts`:

```typescript
export { IntroOverlay } from './ui/IntroOverlay'
```

- [ ] **Step 3: Добавить экспорт в widgets/index.ts**

Текущий `src/widgets/index.ts`:
```typescript
export { ExperienceSection } from './Experience'
export { Footer } from './Footer'
export { HeroSection } from './HeroSection'
export { MarqueeBlock } from './MarqueeBlock'
export { DesktopNavbar } from './Navbar'
export { ProjectsList } from './ProjectsList'
```

Добавить строку с `IntroOverlay` (алфавитный порядок):
```typescript
export { ExperienceSection } from './Experience'
export { Footer } from './Footer'
export { HeroSection } from './HeroSection'
export { IntroOverlay } from './IntroOverlay'
export { MarqueeBlock } from './MarqueeBlock'
export { DesktopNavbar } from './Navbar'
export { ProjectsList } from './ProjectsList'
```

- [ ] **Step 4: Проверить TypeScript**

```bash
cd /home/thisisaliyev/Code/portfolio && bun run build 2>&1 | grep -v "vite.config.ts"
```

Ожидаемый результат: ошибок из `src/` нет (ошибки `vite.config.ts` — pre-existing, игнорируем).

- [ ] **Step 5: Коммит**

```bash
git add src/widgets/IntroOverlay/ui/IntroOverlay.tsx src/widgets/IntroOverlay/index.ts src/widgets/index.ts
git commit -m "feat: add IntroOverlay split-text animation component"
```

---

## Task 2: Подключить IntroOverlay в main.tsx

**Files:**
- Modify: `src/app/main.tsx`

- [ ] **Step 1: Обновить main.tsx**

Заменить весь `src/app/main.tsx`:

```tsx
import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { EASE } from '@shared/lib'
import './index.css'

const HOME_ENTER = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay: 0.6 },
}

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroOverlay
            key='intro'
            onComplete={() => setIntroComplete(true)}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={HOME_ENTER.initial}
        animate={HOME_ENTER.animate}
        transition={HOME_ENTER.transition}
      >
        <Home />
      </motion.div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 2: Запустить dev-сервер и проверить визуально**

```bash
bun run dev
```

Открыть `http://localhost:5173`. Ожидаемое поведение:
1. При загрузке — серый экран с текстом `THISISALIYEV` (fade-in за 400ms)
2. Через 500ms — `THISIS` уезжает влево, `ALIYEV` уезжает вправо (700ms)
3. Одновременно страница въезжает снизу (delay 600ms, 700ms)
4. Через ~1.3s страница полностью открыта

- [ ] **Step 3: Проверить блокировку скролла**

Пока идёт intro (первые ~1.3s) — попробовать скроллить. Страница не должна скроллиться.

- [ ] **Step 4: Проверить sticky sidebar**

После открытия страницы — сайдбар с именем `THISISALIYEV®` должен по-прежнему быть sticky при скролле.

- [ ] **Step 5: Коммит**

```bash
git add src/app/main.tsx
git commit -m "feat: integrate IntroOverlay with AnimatePresence in App"
```
