import React, { ButtonHTMLAttributes, FC } from 'react'

import * as S from './Button.styled'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
)
