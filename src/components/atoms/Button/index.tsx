import React from 'react'

import { ButtonContent } from './styles'

export type Props = {
  children: string
  func?: () => void
  type?: 'submit'
}

function Button({ children, func, type }: Props) {
  return (
    <ButtonContent type={type && type} onClick={() => func && func()}>
      {children}
    </ButtonContent>
  )
}

export default Button
