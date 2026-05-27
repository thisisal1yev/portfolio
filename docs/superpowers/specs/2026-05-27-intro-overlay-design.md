# Intro Overlay Animation Design

**Date:** 2026-05-27  
**Feature:** Page load intro animation — split text reveal  
**Library:** Motion v12 (already installed)

---

## Goal

На загрузке страницы показать full-screen оверлей с текстом `THISIS` и `ALIYEV`. Текст разъезжается — `THISIS` влево, `ALIYEV` вправо. Одновременно страница въезжает снизу, открываясь за уходящим оверлеем.

---

## Архитектура

**Новые файлы:**
- `src/widgets/IntroOverlay/ui/IntroOverlay.tsx` — компонент оверлея
- `src/widgets/IntroOverlay/index.ts` — экспорт

**Изменённые файлы:**
- `src/app/main.tsx` — `introComplete` state + `AnimatePresence`
- `src/widgets/index.ts` — добавить экспорт `IntroOverlay`

**Поток управления:**
1. `main.tsx` хранит `introComplete: boolean` (useState, начальное `false`)
2. Рендерит `<AnimatePresence>` с двумя детьми: `IntroOverlay` (пока `!introComplete`) и `Home`
3. `IntroOverlay` вызывает `onComplete()` после завершения анимации
4. `introComplete = true` → `AnimatePresence` размонтирует `IntroOverlay`

---

## IntroOverlay компонент

**Layout:** `fixed inset-0 z-50 flex items-center justify-center`  
**Фон:** цвет `bg` сайта (CSS-переменная `--color-bg`, Tailwind класс `bg-bg`)  
**Два текстовых блока:** абсолютно позиционированы или flexbox с justify-between

**Стиль текста:**
```
font-black italic uppercase tracking-[-0.05em] leading-none
text-[clamp(80px,12vw,160px)]
```
Идентично тексту сайдбара в `Home.tsx`.

**Анимация (Motion variants):**

```tsx
// THISIS — уходит влево
const leftVariants = {
  hidden:  { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
  exit:    { x: '-100vw', transition: { duration: 0.7, ease: EASE, delay: 0.1 } },
}

// ALIYEV — уходит вправо  
const rightVariants = {
  hidden:  { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
  exit:    { x: '100vw', transition: { duration: 0.7, ease: EASE, delay: 0.1 } },
}
```

**onComplete:** вызывается через `setTimeout(onComplete, 500)` в `useEffect` при mount — после завершения enter-анимации (400ms) с небольшим буфером. Это триггерит `AnimatePresence` на запуск exit-вариантов.

**Блокировка скролла:** `useEffect` добавляет `document.body.style.overflow = 'hidden'` при mount, убирает при unmount.

---

## Home — вход одновременно с разъездом

В `main.tsx` `Home` оборачивается в `motion.div`:

```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
>
  <Home />
</motion.div>
```

`delay: 0.6s` — начинает въезд одновременно с уходом текста.

---

## Тайминг

| Время | Событие |
|---|---|
| `0ms` | Страница загружена, `IntroOverlay` появляется (`hidden → visible`) |
| `0–400ms` | `THISIS` + `ALIYEV` fade-in |
| `500ms` | `setTimeout` → `onComplete()` → `AnimatePresence` запускает exit |
| `600ms` | `Home` начинает въезжать снизу (`delay: 0.6s`) |
| `500–1300ms` | Параллельная анимация разъезда текста и въезда страницы |
| `~1300ms` | `IntroOverlay` полностью размонтирован, страница открыта |

---

## Easing

`EASE = [0.44, 0, 0.56, 1]` — уже определён в `src/shared/lib/animations.ts`, импортировать оттуда.

---

## Out of scope

- Повторный показ интро (не показывать при повторном визите / навигации)
- Кастомный курсор во время интро
- Звуковые эффекты
