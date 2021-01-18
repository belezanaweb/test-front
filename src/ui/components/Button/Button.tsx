import React, { ButtonHTMLAttributes, FC } from 'react'

import * as S from './styled'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
)

export default Button
