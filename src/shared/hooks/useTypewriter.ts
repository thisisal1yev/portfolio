import { useEffect, useRef, useState } from 'react'

interface Options {
  /** ms per character */
  speed?: number
  /** ms before typing starts */
  startDelay?: number
  /** begin typing only when true */
  start?: boolean
  onDone?: () => void
}

/** Types out `text` character-by-character. Returns the visible slice + done flag. */
export function useTypewriter(
  text: string,
  { speed = 38, startDelay = 0, start = true, onDone }: Options = {},
) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    if (!start) return

    let i = 0
    let typer: ReturnType<typeof setInterval>

    const starter = setTimeout(() => {
      typer = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(typer)
          setDone(true)
          onDoneRef.current?.()
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(starter)
      clearInterval(typer)
    }
  }, [text, speed, startDelay, start])

  return { output, done }
}
