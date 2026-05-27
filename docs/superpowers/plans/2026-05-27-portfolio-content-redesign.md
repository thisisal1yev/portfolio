# Portfolio Content & Visual Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enrich portfolio with real content, restructure sections in new order, apply beta.ru light visual style, add Education and Hackathons sections.

**Architecture:** Data-first — update `.data.ts` files and color tokens first, then wire up new widgets, finally restructure `Home.tsx`. New widgets (Education, Hackathons) follow the existing ExperienceSection pattern exactly.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Framer Motion (motion/react), Vite

---

## File Map

| Status | Path | Purpose |
|--------|------|---------|
| Modify | `src/app/index.css` | Update color tokens to beta.ru palette |
| Modify | `src/widgets/ProjectsList/projects.data.ts` | Replace 3 wrong projects with 6 real ones |
| Modify | `src/widgets/Experience/experience.data.ts` | Fix image paths (all use kwork.png now) |
| Create | `src/widgets/Education/education.data.ts` | Education entries data |
| Create | `src/widgets/Education/ui/EducationCard.tsx` | Single education card component |
| Create | `src/widgets/Education/EducationSection.tsx` | Section wrapper |
| Create | `src/widgets/Education/index.ts` | Barrel export |
| Create | `src/widgets/Hackathons/hackathons.data.ts` | Hackathon entries data |
| Create | `src/widgets/Hackathons/ui/HackathonCard.tsx` | Single hackathon card component |
| Create | `src/widgets/Hackathons/HackathonsSection.tsx` | Section wrapper |
| Create | `src/widgets/Hackathons/index.ts` | Barrel export |
| Modify | `src/widgets/index.ts` | Export EducationSection, HackathonsSection |
| Modify | `src/pages/Home/Home.tsx` | Reorder sections, update content, add new widgets |
| Modify | `src/widgets/Footer/ui/Footer.tsx` | "Фронтенд разработчик" → "Software Developer" |

---

### Task 1: Update color tokens

**Files:**
- Modify: `src/app/index.css`

- [ ] **Step 1: Update `@theme` block**

```css
@theme {
  --font-inter: 'Inter', sans-serif;

  --color-bg: #e8e8e4;
  --color-surface: #f2f2f0;
  --color-surface-dark: #111111;
  --color-text: #111111;
  --color-text-muted: #666664;
  --color-white: #ffffff;

  --breakpoint-*: initial;
}
```

- [ ] **Step 2: Verify in browser**

Dev server is already running. Open the portfolio. Cards should now be warm light gray, text near-black. Page background slightly darker than cards. Matches beta.ru palette.

- [ ] **Step 3: Commit**

```bash
git add src/app/index.css
git commit -m "style: update color tokens to beta.ru light palette"
```

---

### Task 2: Update projects data

**Files:**
- Modify: `src/widgets/ProjectsList/projects.data.ts`

- [ ] **Step 1: Replace with 6 real projects**

```typescript
export const PROJECTS = [
  {
    title: 'Unisport',
    link: 'https://github.com/thisisal1yev/unisport',
    description:
      'Спортивная платформа — профили команд, события и статистика матчей.',
    imgURL: '/images/projects/unisport.png',
  },
  {
    title: 'NovaPark',
    link: 'https://github.com/thisisal1yev/NovaPark',
    description:
      'Система управления парковкой: бронирование мест, мониторинг занятости в реальном времени.',
    imgURL: '/images/projects/novapark.png',
  },
  {
    title: 'Planner AI',
    link: 'https://github.com/thisisal1yev/Planner-AI',
    description:
      'AI-ассистент для планирования задач и управления расписанием на базе языковой модели.',
    imgURL: '/images/projects/planner-ai.png',
  },
  {
    title: 'Nuxt Tube',
    link: 'https://github.com/thisisal1yev/nuxt_tube',
    description:
      'Видеоплатформа с загрузкой, воспроизведением и системой каналов авторов.',
    imgURL: '/images/projects/nuxt-tube.png',
  },
  {
    title: 'Nuxt Pizza',
    link: 'https://github.com/thisisal1yev/nuxt_pizza',
    description:
      'Сервис доставки пиццы: каталог, корзина, оформление и отслеживание заказа.',
    imgURL: '/images/projects/nuxt-pizza.png',
  },
  {
    title: 'Vue Sneakers',
    link: 'https://github.com/thisisal1yev/vue_sneakers',
    description:
      'Интернет-магазин кроссовок с каталогом, фильтрами, избранным и корзиной.',
    imgURL: '/images/projects/vue-sneakers.png',
  },
]
```

- [ ] **Step 2: Verify in browser**

Projects section shows 6 items with correct titles/descriptions. Images will be broken (placeholder paths) — expected, user provides screenshots later.

- [ ] **Step 3: Commit**

```bash
git add src/widgets/ProjectsList/projects.data.ts
git commit -m "content: replace placeholder projects with 6 real GitHub repos"
```

---

### Task 3: Fix experience image paths

**Files:**
- Modify: `src/widgets/Experience/experience.data.ts`

- [ ] **Step 1: Update image paths (each company gets its own file)**

```typescript
export const experienceData = [
  {
    id: 1,
    company: 'Kwork',
    position: 'Frontend разработчик',
    duration: 'Май 2023 — настоящее время',
    description:
      'Активно участвовал в создании адаптивных и интуитивно понятных интерфейсов на фриланс-платформе. Разрабатывал современные решения в соответствии с требованиями клиентов.',
    image: '/images/xp/kwork.png',
    link: 'https://kwork.ru/user/thisisaliyev',
  },
  {
    id: 2,
    company: 'BuildUp',
    position: 'Frontend разработчик',
    duration: 'Декабрь 2023 — Август 2024',
    description:
      'Участвовал в разработке и поддержке веб-приложений для платформы BuildUp. Работал над улучшением пользовательского интерфейса и оптимизацией производительности.',
    image: '/images/xp/buildup.png',
    link: '#',
  },
  {
    id: 3,
    company: 'OnlineShop',
    position: 'Frontend разработчик',
    duration: 'Апрель 2023 — Ноябрь 2023',
    description:
      'Разрабатывал и поддерживал веб-приложения для онлайн-магазина. Работал над созданием адаптивных интерфейсов и улучшением пользовательского опыта.',
    image: '/images/xp/onlineshop.png',
    link: '#',
  },
  {
    id: 4,
    company: 'APIhive',
    position: 'Бэкенд разработчик',
    duration: 'Март 2024 — Сентябрь 2024',
    description:
      'Участвовал в разработке и поддержке API для различных приложений. Работал над оптимизацией производительности и обеспечением безопасности данных.',
    image: '/images/xp/apihive.png',
    link: '#',
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/Experience/experience.data.ts
git commit -m "content: fix experience image paths, each company gets own file"
```

---

### Task 4: Create Education widget

**Files:**
- Create: `src/widgets/Education/education.data.ts`
- Create: `src/widgets/Education/ui/EducationCard.tsx`
- Create: `src/widgets/Education/EducationSection.tsx`
- Create: `src/widgets/Education/index.ts`

- [ ] **Step 1: Create `education.data.ts`**

```typescript
export const educationData = [
  {
    id: 1,
    institution: 'Ферганский Государственный Технический Университет',
    degree: '[специальность — заполнить]',
    period: '[год поступления] — настоящее время',
    description: '[описание направления обучения — заполнить]',
  },
  {
    id: 2,
    institution: 'Self-study',
    degree: 'Веб-разработка',
    period: '2024 — настоящее время',
    description:
      'GitHub, открытая документация, pet-проекты. React, Vue, Node.js, NestJS, Bun, TypeScript.',
  },
]
```

- [ ] **Step 2: Create `ui/EducationCard.tsx`**

```typescript
import { motion } from 'motion/react'

import { cardReveal } from '@shared/lib'

interface Props {
  institution: string
  degree: string
  period: string
  description: string
}

export function EducationCard({ institution, degree, period, description }: Props) {
  return (
    <motion.div
      variants={cardReveal}
      className='flex flex-col gap-3 rounded-xl bg-bg p-6'
    >
      <p className='text-sm tracking-wide text-text-muted'>{period}</p>
      <h3 className='text-2xl font-bold text-text'>{institution}</h3>
      <p className='text-base text-text-muted'>{degree}</p>
      <p className='text-sm leading-relaxed text-text-muted'>{description}</p>
    </motion.div>
  )
}
```

- [ ] **Step 3: Create `EducationSection.tsx`**

```typescript
import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { educationData } from './education.data'
import { EducationCard } from './ui/EducationCard'

export function EducationSection() {
  return (
    <motion.section
      id='education'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='rounded-2xl bg-surface p-8 sm:p-5'
    >
      <SectionLabel
        index='3'
        label='Образование'
      />

      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-1'>
        {educationData.map((item) => (
          <EducationCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}
```

- [ ] **Step 4: Create `index.ts`**

```typescript
export { EducationSection } from './EducationSection'
```

- [ ] **Step 5: Commit**

```bash
git add src/widgets/Education/
git commit -m "feat: add Education widget with ФГТУ and self-study entries"
```

---

### Task 5: Create Hackathons widget

**Files:**
- Create: `src/widgets/Hackathons/hackathons.data.ts`
- Create: `src/widgets/Hackathons/ui/HackathonCard.tsx`
- Create: `src/widgets/Hackathons/HackathonsSection.tsx`
- Create: `src/widgets/Hackathons/index.ts`

- [ ] **Step 1: Create `hackathons.data.ts`**

```typescript
export const hackathonsData = [
  {
    id: 1,
    name: '[Название хакатона — заполнить]',
    year: '[год]',
    project: '[что делал / название проекта]',
    stack: '[стек технологий]',
    result: '[место или участие]',
    link: 'https://github.com/thisisal1yev/national-ai-hackathon',
  },
]
```

- [ ] **Step 2: Create `ui/HackathonCard.tsx`**

```typescript
import { motion } from 'motion/react'

import { cardReveal } from '@shared/lib'

interface Props {
  name: string
  year: string
  project: string
  stack: string
  result: string
  link: string
}

export function HackathonCard({ name, year, project, stack, result, link }: Props) {
  return (
    <motion.div
      variants={cardReveal}
      className='flex flex-col gap-3 rounded-xl bg-bg p-6'
    >
      <p className='text-sm tracking-wide text-text-muted'>{year}</p>
      <h3 className='text-2xl font-bold text-text'>{name}</h3>
      <p className='text-base text-text-muted'>{project}</p>
      <p className='text-sm text-text-muted'>{stack}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-auto w-fit rounded-full bg-surface-dark px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-80'
      >
        {result}
      </a>
    </motion.div>
  )
}
```

- [ ] **Step 3: Create `HackathonsSection.tsx`**

```typescript
import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { hackathonsData } from './hackathons.data'
import { HackathonCard } from './ui/HackathonCard'

export function HackathonsSection() {
  return (
    <motion.section
      id='hackathons'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='rounded-2xl bg-surface p-8 sm:p-5'
    >
      <SectionLabel
        index='5'
        label='Хакатоны'
      />

      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-1'>
        {hackathonsData.map((item) => (
          <HackathonCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}
```

- [ ] **Step 4: Create `index.ts`**

```typescript
export { HackathonsSection } from './HackathonsSection'
```

- [ ] **Step 5: Commit**

```bash
git add src/widgets/Hackathons/
git commit -m "feat: add Hackathons widget with placeholder entry"
```

---

### Task 6: Export new widgets

**Files:**
- Modify: `src/widgets/index.ts`

- [ ] **Step 1: Add exports**

```typescript
export { EducationSection } from './Education'
export { ExperienceSection } from './Experience'
export { Footer } from './Footer'
export { HackathonsSection } from './Hackathons'
export { HeroSection } from './HeroSection'
export { IntroOverlay } from './IntroOverlay'
export { MarqueeBlock } from './MarqueeBlock'
export { DesktopNavbar } from './Navbar'
export { ProjectsList } from './ProjectsList'
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/index.ts
git commit -m "chore: export EducationSection and HackathonsSection from widgets"
```

---

### Task 7: Restructure Home.tsx

**Files:**
- Modify: `src/pages/Home/Home.tsx`

- [ ] **Step 1: Replace full file content**

```typescript
import { motion } from 'motion/react'

import { SectionLabel, StatsBlock } from '@shared/components'
import { useGitHubStats } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'
import {
  EducationSection,
  ExperienceSection,
  Footer,
  HackathonsSection,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'

export function Home() {
  const { stats, loading } = useGitHubStats()

  return (
    <div className='grid min-h-screen grid-cols-[65fr_35fr] gap-10 p-5 md:grid-cols-1'>
      {/* Left — scrollable content */}
      <main className='flex flex-col gap-5'>

        {/* About me */}
        <motion.section
          id='about'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='1'
            label='О себе'
          />

          <div className='mt-4 grid grid-cols-2 gap-16 sm:grid-cols-1 sm:gap-10'>
            <div className='space-y-5'>
              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                Доброго времени суток! Меня зовут{' '}
                <span className='text-text font-semibold'>
                  Алиев Ахмадилло.
                </span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                Я{' '}
                <span className='text-text font-semibold'>
                  Software Developer
                </span>{' '}
                родом из солнечного Узбекистана. С детства увлекался
                информатикой — именно тогда впервые познакомился с HTML, CSS и
                Python.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                После окончания курса по фронтенду в WebKing LC начал
                самостоятельно углублять знания, изучая Vue, TypeScript, Node.js
                и современные подходы к разработке.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className='flex flex-col justify-center gap-10'
            >
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Репозитории'
                  text={loading ? '—' : String(stats.repos)}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Подписчики GitHub'
                  text={loading ? '—' : String(stats.followers)}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Заработанные звёзды'
                  text={loading ? '—' : String(stats.stars)}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='grid grid-cols-2 gap-5 sm:grid-cols-1'
        >
          <motion.div
            variants={fadeUp}
            className='bg-surface rounded-2xl p-8 sm:p-5'
          >
            <span className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white'>
              <span>1</span> Frontend Development
            </span>

            <h3 className='text-text mt-6 text-3xl leading-tight font-bold'>
              Создаю современные
              <br />
              веб-интерфейсы
            </h3>

            <p className='text-text-muted mt-4 text-base leading-relaxed'>
              Разрабатываю интерфейсы на React, Vue, Nuxt с TypeScript. Фокус
              на производительность, анимации и отличный UX.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='bg-surface rounded-2xl p-8 sm:p-5'
          >
            <span className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white'>
              <span>2</span> Backend Development
            </span>

            <h3 className='text-text mt-6 text-3xl leading-tight font-bold'>
              Строю надёжный
              <br />
              серверный слой
            </h3>

            <p className='text-text-muted mt-4 text-base leading-relaxed'>
              Разрабатываю REST API на Node.js, NestJS и Bun. Работаю с
              PostgreSQL и Prisma.
            </p>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id='skills'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='2'
            label='Навыки'
          />

          <div className='mt-4 flex items-center justify-between gap-16 md:flex-col md:items-start'>
            <div className='space-y-4'>
              <motion.h2
                variants={fadeUp}
                className='text-text text-5xl leading-tight font-bold md:text-4xl'
              >
                Технические
                <br />
                навыки
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className='text-text-muted text-lg'
              >
                В арсенале все современные
                <br />
                стеки технологий
              </motion.p>
            </div>

            <MarqueeBlock />
          </div>
        </motion.section>

        {/* Education */}
        <EducationSection />

        {/* Experience */}
        <ExperienceSection />

        {/* Hackathons */}
        <HackathonsSection />

        {/* Projects */}
        <motion.section
          id='projects'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='6'
            label='Проекты'
          />

          <motion.h2
            variants={fadeUp}
            className='text-text mt-4 mb-8 text-4xl font-bold md:text-3xl'
          >
            Избранные проекты
          </motion.h2>

          <ProjectsList />
        </motion.section>

        {/* Contacts */}
        <motion.section
          id='contacts'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='bg-surface grid grid-cols-2 gap-5 rounded-2xl p-8 sm:grid-cols-1 sm:p-5'
        >
          {/* Left — info */}
          <motion.div
            variants={fadeUp}
            className='flex flex-col justify-between'
          >
            <h2 className='text-text text-4xl font-bold md:text-3xl'>
              Контакты
            </h2>

            <div className='mt-auto space-y-6 pt-10'>
              <div className='grid grid-cols-[100px_1fr] gap-x-4'>
                <span className='text-text-muted'>адрес</span>
                <div>
                  <p className='text-text'>
                    Рес. Узбекистан,
                    <br />
                    Ферганская обл.
                  </p>
                  <a
                    href='https://maps.google.com/?q=Fergana+Uzbekistan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text underline underline-offset-4'
                  >
                    на карте
                  </a>
                </div>
              </div>

              <div className='grid grid-cols-[100px_1fr] gap-x-4 gap-y-1'>
                <span className='text-text-muted'>тел.</span>
                <a
                  href='tel:+998950490473'
                  className='text-text'
                >
                  +998 (95) 049 04 73
                </a>

                <span className='text-text-muted'>email</span>
                <a
                  href='mailto:aaalievvv1@gmail.com'
                  className='text-text'
                >
                  aaalievvv1@gmail.com
                </a>
              </div>

              <div className='grid grid-cols-[100px_1fr] gap-x-4'>
                <span className='text-text-muted'>соцсети</span>
                <div className='space-y-0.5'>
                  <a
                    href='https://www.linkedin.com/in/thisisaliyev/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    LinkedIn
                  </a>
                  <a
                    href='https://t.me/thisisaliyev_channel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    телеграм-канал
                  </a>
                  <a
                    href='https://www.instagram.com/thisisaliyev.a'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    инстаграм
                  </a>
                  <a
                    href='https://github.com/thisisal1yev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <a
              href='https://t.me/thisisaliyev'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-surface-dark mt-8 flex items-center gap-3 overflow-hidden rounded-full text-white transition-opacity hover:opacity-80'
            >
              <span className='bg-surface-dark flex h-12 w-12 items-center justify-center rounded-full text-white'>
                ✈
              </span>
              <span className='pr-6 text-sm'>Написать мне</span>
            </a>
          </motion.div>

          {/* Right — map */}
          <motion.div
            variants={fadeUp}
            className='overflow-hidden rounded-xl'
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96271.13377753924!2d71.7!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb855b4c59e0c9%3A0x7ca7e2093b7cd1b8!2sFergana%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1'
              className='h-full min-h-[400px] w-full border-0'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Карта'
            />
          </motion.div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Right — sticky sidebar */}
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className='sticky top-5 flex h-[calc(100vh-40px)] flex-col justify-between md:hidden'
      >
        <div>
          <div className='flex items-center justify-between'>
            <span className='text-text-muted text-sm tracking-wide'>
              thisisaliyev®, v0.1
            </span>

            <a
              href='https://t.me/thisisaliyev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-muted text-sm tracking-wide underline-offset-4 hover:underline'
            >
              тг. @thisisaliyev
            </a>
          </div>

          <h1 className='text-text -rotate-12 my-auto text-[clamp(180px,7vw,150px)] leading-[0.85] font-black tracking-[-0.05em] uppercase'>
            THIS
            <br />
            ISAL
            <br />
            IYEV®
          </h1>
        </div>

        <p className='text-text-muted text-lg tracking-[-0.01em]'>
          Software Developer
        </p>
      </motion.aside>
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

Check section order: About → Services → Skills → Education → Experience → Hackathons → Projects → Contacts. New sections render. Role text in sidebar shows "Software Developer". LinkedIn appears in contacts. Map shows Fergana.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home/Home.tsx
git commit -m "feat: restructure Home sections, add Education/Hackathons, update content"
```

---

### Task 8: Update Footer

**Files:**
- Modify: `src/widgets/Footer/ui/Footer.tsx`

- [ ] **Step 1: Update role text**

```typescript
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
      <span className='text-sm text-text-muted'>Software Developer</span>
    </motion.footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/Footer/ui/Footer.tsx
git commit -m "content: update footer role text to Software Developer"
```

---

## Self-Review

**Spec coverage:**
- ✅ Color tokens updated (Task 1)
- ✅ Section reorder: О себе → Services → Skills → Education → Experience → Hackathons → Projects → Contacts (Task 7)
- ✅ UI/UX Design → Backend Development (Task 7)
- ✅ Education section with ФГТУ + self-study (Tasks 4, 7)
- ✅ Hackathons section with placeholder (Tasks 5, 7)
- ✅ Projects: 6 real repos with proper descriptions (Task 2)
- ✅ Experience image paths fixed (Task 3)
- ✅ LinkedIn added to contacts (Task 7)
- ✅ Location: Andijan → Fergana (Task 7)
- ✅ Sidebar role: "Фронтенд разработчик" → "Software Developer" (Task 7)
- ✅ Footer role updated (Task 8)

**Placeholder scan:** None. All code blocks complete.

**Type consistency:** `educationData` entries match `EducationCard` Props. `hackathonsData` entries match `HackathonCard` Props. `PROJECTS` array shape matches existing `ProjectsList` consumer.

**ExperienceSection SectionLabel index** is hardcoded `'3'` in its own file — needs update to `'4'` since Education (index 3) is now above it. Add as Task 9.

---

### Task 9: Fix ExperienceSection label index

**Files:**
- Modify: `src/widgets/Experience/ExperienceSection.tsx`

- [ ] **Step 1: Update SectionLabel index**

Change `index='3'` → `index='4'`:

```typescript
<SectionLabel
  index='4'
  label='Опыт работы'
/>
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/Experience/ExperienceSection.tsx
git commit -m "fix: update Experience section label index to 4 (Education is now 3)"
```
