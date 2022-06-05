import React from 'react'

import { ButtonContent } from './styles'

export type Props = {
  children: string
  func?: () => void
  active?: boolean
  type?: 'submit'
}

function Button({ children, func, active = true, type }: Props) {
  return (
    <ButtonContent type={type && type} onClick={() => func && func()} active={active}>
      {children}
    </ButtonContent>
  )
}

export default Button
