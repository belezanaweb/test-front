import React, { ReactNode } from 'react'
import { ButtonBox } from './Button.style'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <ButtonBox onClick={onClick}>{children}</ButtonBox>
)
