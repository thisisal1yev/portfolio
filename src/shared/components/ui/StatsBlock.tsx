interface Props {
  title: string
  text: string
}

export function StatsBlock({ title, text }: Props) {
  return (
    <div>
      <p className='text-[100px] font-black leading-none text-white'>{text}</p>
      <p className='mt-2 text-sm tracking-widest text-muted uppercase'>{title}</p>
    </div>
  )
}
