import React from 'react'

import { ButtonContent } from './styles'

type Props = {
  children: string
  func: () => void
}

function Button({ children, func }: Props) {
  return <ButtonContent onClick={() => func()}>{children}</ButtonContent>
}

export default Button
