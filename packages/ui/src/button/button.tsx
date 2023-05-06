import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button className="bg-purple-500 text-lg" {...props}>
      click me
    </button>
  )
}
