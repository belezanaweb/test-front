import React from 'react'

import { ButtonStyled } from './Button.elements'

export default function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}
