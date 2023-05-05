import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button style={{ backgroundColor: 'palevioletred', padding: '10px' }} {...props}>
      click me
    </button>
  )
}
