# Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Добавить scroll-triggered fade-in анимации и parallax-эффект на HeroSection используя Motion v12.

**Architecture:** `useParallax` хук инкапсулирует `useScroll` + `useTransform` логику. HeroSection фоновое изображение двигается с эффектом глубины при скролле. Footer получает motion-обёртку и добавляется в Home. Все остальные секции уже имеют `whileInView` через родительские `staggerContainer`.

**Tech Stack:** React 19, TypeScript, Motion v12 (`motion/react`), Vite, Tailwind CSS 4

---

## Анализ текущего состояния

Уже работает — менять не нужно:
- `ProjectsList` — `whileInView` + `staggerContainer` + `cardReveal` ✅
- `ExperienceSection` — `whileInView` + `staggerContainer` + `cardReveal` ✅
- `MarqueeBlock` — `variants={fadeIn}` наследует состояние от родительского `staggerContainer` в Home.tsx ✅
- Все секции в `Home.tsx` — `whileInView` + `staggerContainer` ✅

Нужно добавить:
- `useParallax` хук
- Parallax на `<img>` в HeroSection
- Motion-обёртку на Footer + добавить Footer в Home

---

## Файлы

| Действие | Путь |
|---|---|
| Создать | `src/shared/hooks/useParallax.ts` |
| Изменить | `src/shared/hooks/index.ts` |
| Изменить | `src/widgets/HeroSection/ui/HeroSection.tsx` |
| Изменить | `src/widgets/Footer/ui/Footer.tsx` |
| Изменить | `src/pages/Home/Home.tsx` |

---

## Task 1: Создать хук useParallax

**Files:**
- Create: `src/shared/hooks/useParallax.ts`
- Modify: `src/shared/hooks/index.ts`

- [ ] **Step 1: Создать файл хука**

```typescript
// src/shared/hooks/useParallax.ts
import { RefObject } from 'react'
import { MotionValue, useScroll, useTransform } from 'motion/react'

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  inputRange: [number, number],
  outputRange: [number | string, number | string],
): MotionValue {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return useTransform(scrollYProgress, inputRange, outputRange)
}
```

- [ ] **Step 2: Добавить экспорт в hooks/index.ts**

Текущий `src/shared/hooks/index.ts`:
```typescript
export { useGitHubStats } from './useGitHubStats'
export { useIntersectionObserver } from './useIntersectionObserver'
```

Добавить строку:
```typescript
export { useGitHubStats } from './useGitHubStats'
export { useIntersectionObserver } from './useIntersectionObserver'
export { useParallax } from './useParallax'
```

- [ ] **Step 3: Проверить что TypeScript не ругается**

```bash
cd /home/thisisaliyev/Code/portfolio && bun run build 2>&1 | tail -20
```

Ожидаемый результат: сборка успешна, ошибок нет.

- [ ] **Step 4: Коммит**

```bash
git add src/shared/hooks/useParallax.ts src/shared/hooks/index.ts
git commit -m "feat: add useParallax hook for scroll-based transform"
```

---

## Task 2: Parallax на HeroSection

**Files:**
- Modify: `src/widgets/HeroSection/ui/HeroSection.tsx`

- [ ] **Step 1: Обновить HeroSection**

Заменить текущий `src/widgets/HeroSection/ui/HeroSection.tsx`:
```tsx
import { useRef } from 'react'
import { Play } from 'lucide-react'
import { motion } from 'motion/react'

import { useParallax } from '@shared/hooks'
import { fadeUp } from '@shared/lib'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const y = useParallax(ref, [0, 1], [0, -20])

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate='visible'
      variants={fadeUp}
      className='relative aspect-16/10 overflow-hidden rounded-2xl bg-surface'
    >
      <motion.img
        style={{ y }}
        src='https://framerusercontent.com/images/wQo7RdwFi65CZtFq2ttWIRPfRoA.jpg'
        alt='Portfolio showcase'
        className='h-full w-full object-cover'
      />

      <a
        href='https://github.com/thisisal1yev'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute top-5 left-5 flex items-center gap-2 rounded-full bg-surface-dark px-4 py-2 text-sm text-white transition-opacity hover:opacity-80'
      >
        <Play size={14} />
        Портфолио
      </a>
    </motion.div>
  )
}
```

- [ ] **Step 2: Запустить dev-сервер и проверить визуально**

```bash
bun run dev
```

Открыть `http://localhost:5173`. При скролле вниз фоновое изображение HeroSection должно слегка сдвигаться вверх (на 20px) — эффект глубины.

- [ ] **Step 3: Проверить что mount-анимация (fadeUp) не сломалась**

При загрузке страницы HeroSection должен появляться снизу вверх с fade.

- [ ] **Step 4: Коммит**

```bash
git add src/widgets/HeroSection/ui/HeroSection.tsx
git commit -m "feat: add parallax effect to HeroSection background image"
```

---

## Task 3: Motion-обёртка на Footer + добавить в Home

**Files:**
- Modify: `src/widgets/Footer/ui/Footer.tsx`
- Modify: `src/pages/Home/Home.tsx`

- [ ] **Step 1: Добавить motion-обёртку в Footer**

Заменить текущий `src/widgets/Footer/ui/Footer.tsx`:
```tsx
import { motion } from 'motion/react'

import { fadeIn } from '@shared/lib'

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      className='flex items-center justify-between'
    >
      <span className='text-sm text-text-muted'>
        thisisaliyev® {new Date().getFullYear()}
      </span>
      <span className='text-sm text-text-muted'>Фронтенд разработчик</span>
    </motion.footer>
  )
}
```

- [ ] **Step 2: Добавить Footer в Home.tsx**

В `src/pages/Home/Home.tsx` добавить импорт Footer (он уже есть в `@widgets`).

Найти строку:
```tsx
import {
  ExperienceSection,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'
```

Заменить на:
```tsx
import {
  ExperienceSection,
  Footer,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'
```

Затем в конце `<main>` блока, после последней секции (Contacts), добавить перед закрывающим `</main>`:
```tsx
        {/* Footer */}
        <Footer />
```

Итоговый конец `<main>` блока:
```tsx
        {/* Contacts */}
        <motion.section
          id='contacts'
          ...
        >
          ...
        </motion.section>

        {/* Footer */}
        <Footer />
      </main>
```

- [ ] **Step 3: Проверить визуально**

```bash
bun run dev
```

Открыть `http://localhost:5173`. Проскроллить вниз — Footer должен появляться с fade-in анимацией в конце страницы.

- [ ] **Step 4: Финальная проверка сборки**

```bash
bun run build 2>&1 | tail -20
```

Ожидаемый результат: сборка успешна, ошибок нет.

- [ ] **Step 5: Коммит**

```bash
git add src/widgets/Footer/ui/Footer.tsx src/pages/Home/Home.tsx
git commit -m "feat: add fade-in animation to Footer and render it in Home"
```
