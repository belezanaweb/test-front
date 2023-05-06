import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button className="ui-bg-purple-500 ui-text-lg" {...props}>
      click me
    </button>
  )
}
