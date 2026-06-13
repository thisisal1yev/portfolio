import { useEffect, useMemo, useState } from 'react'

/** Live HH:MM:SS clock in the given IANA timezone (default: Tashkent). */
export function useClock(timeZone = 'Asia/Tashkent') {
  const [time, setTime] = useState('')

  const fmt = useMemo(
    () =>
      new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone,
      }),
    [timeZone],
  )

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [fmt])

  return time
}
