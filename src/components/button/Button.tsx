import React, { ReactNode } from 'react'
import { ButtonBox } from './Button.style'

interface ButtonProps {
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => (
  <ButtonBox>{children}</ButtonBox>
)
