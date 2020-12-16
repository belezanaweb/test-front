import React, { FC } from 'react'

import { IButtonProps } from './button.interface'
import * as Styled from './button.styled'

export const Button: FC<IButtonProps> = ({ children, size, onClick }) => (
  <Styled.Button size={size} onClick={onClick}>
    {children}
  </Styled.Button>
)
