import React from 'react'

import { ButtonContent } from './styles'

type Props = {
  children: string
}

function Button({ children }: Props) {
  return <ButtonContent>{children}</ButtonContent>
}

export default Button
