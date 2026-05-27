# Portfolio Content & Visual Redesign

**Date:** 2026-05-27  
**Status:** Approved

## Goal

Enrich portfolio with real personal info, restructure sections, apply beta.ru visual style, add Education and Hackathons sections. User fills content placeholders after UI is built.

---

## Visual Style (beta.ru)

Invert color scheme from dark to light:

| Token | Current | New |
|-------|---------|-----|
| Page background | dark | `#f2f2f0` (warm light gray) |
| `bg-surface` (cards) | dark surface | `#ffffff` |
| `bg-surface-dark` (badges) | darker | `#111111` |
| `text-text` | light | `#111111` |
| `text-text-muted` | muted light | `#666666` |

Typography stays heavy/black weight — already matches beta.ru. No font changes needed.

---

## Section Order (new)

| # | Section | Change |
|---|---------|--------|
| 1 | HeroSection | No change |
| 2 | О себе | Moved up from position 5 |
| 3 | Сервисы (2 cards) | Replace "UI/UX" → "Backend Dev" |
| 4 | Навыки (MarqueeBlock) | No change |
| 5 | Образование | **NEW** |
| 6 | Опыт | Fix: all entries use wrong image |
| 7 | Хакатоны | **NEW** |
| 8 | Проекты | Better project selection + real descriptions |
| 9 | Контакты | Add LinkedIn |
| 10 | Footer | No change |

---

## Section Details

### 2 — О себе

Move above services. Keep GitHub stats block. Update bio text placeholder:

```
[Имя] — Software Developer из [город], Узбекистан.
Разрабатываю [что] на стеке [стек].
[Что-то личное / интересное].
```

Update sidebar role text: "Фронтенд разработчик" → "Software Developer".

### 3 — Сервисы

Two cards, same grid layout:

- **Card 1 — `1` Frontend Development**: React, Vue, Nuxt, TypeScript
- **Card 2 — `2` Backend Development**: Node.js, NestJS, Bun, REST API

Remove current "UI/UX Design" card.

### 5 — Образование (NEW)

New section after Skills. Card layout with 2 entries:

| Field | Entry 1 | Entry 2 |
|-------|---------|---------|
| Institution | Ферганский Государственный Технический Университет | Self-study |
| Period | [год поступления] — настоящее время | 2024 — настоящее время |
| Detail | [специальность — placeholder] | GitHub, открытые ресурсы, pet-проекты |

Component: `EducationSection` widget, data in `education.data.ts`.

### 6 — Опыт

Fix `experience.data.ts`: each entry needs its own image. Use placeholder `/images/xp/[company].png` pattern — user replaces files. Currently all 4 use `kwork.png`.

Entries (unchanged dates/text, just image paths fixed):
- Kwork → `/images/xp/kwork.png`
- BuildUp → `/images/xp/buildup.png`
- OnlineShop → `/images/xp/onlineshop.png`
- APIhive → `/images/xp/apihive.png`

### 7 — Хакатоны (NEW)

New section after Experience. Card/list layout, placeholder data:

| Field | Entry 1 |
|-------|---------|
| Event | [Название хакатона] |
| Year | [год] |
| Project | [что делал] |
| Stack | [стек] |
| Result | [место / участие] |

Component: `HackathonsSection` widget, data in `hackathons.data.ts`.  
GitHub has: `national-ai-hackathon` (Python). User fills rest.

### 8 — Проекты

Replace 3 current projects (wrong descriptions, same placeholder image) with better selection:

| Title | Repo | Stack | Description (placeholder) |
|-------|------|-------|--------------------------|
| Unisport | unisport | TypeScript | Спортивная платформа |
| NovaPark | NovaPark | TypeScript | Система управления парковкой |
| Planner AI | Planner-AI | TypeScript | AI-планировщик задач |
| Nuxt Tube | nuxt_tube | Vue/Nuxt | Видеоплатформа (YouTube-клон) |
| Nuxt Pizza | nuxt_pizza | Vue/Nuxt | Сервис заказа пиццы |
| Vue Sneakers | vue_sneakers | Vue | Интернет-магазин кроссовок |

Images: user provides real screenshots. Use same placeholder pattern for now.

### 9 — Контакты

Add LinkedIn to social links:

```
linkedin.com/in/thisisaliyev/
```

Fix location: GitHub says "Fergana" — update from "Андижанская обл." → "Ферганская обл." (or user decides).

---

## Files to Change

| File | Change |
|------|--------|
| `src/app/index.css` | Update color tokens |
| `src/pages/Home/Home.tsx` | Reorder sections, add new section imports |
| `src/widgets/HeroSection/ui/HeroSection.tsx` | No change |
| `src/widgets/Experience/experience.data.ts` | Fix image paths |
| `src/widgets/ProjectsList/projects.data.ts` | New 6 projects with real descriptions |
| `src/widgets/index.ts` | Export new widgets |
| `src/pages/Home/Home.tsx` | Update sidebar role text |
| **NEW** `src/widgets/Education/` | New widget (EducationSection + education.data.ts) |
| **NEW** `src/widgets/Hackathons/` | New widget (HackathonsSection + hackathons.data.ts) |
| `src/widgets/Footer/ui/Footer.tsx` | Check if needs update |

---

## Out of Scope

- i18n (planned later)
- Real project screenshots (user provides)
- Real hackathon data (user fills placeholders)
- ФГТУ faculty/specialty (user fills placeholder)
- Animation changes (keep existing Framer Motion setup)
