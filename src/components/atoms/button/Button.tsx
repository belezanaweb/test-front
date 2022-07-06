import React, { ReactNode } from 'react'
import { ButtonBox } from './Button.style'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled
}: ButtonProps) => (
  <ButtonBox disabled={disabled} type={type} onClick={onClick}>
    {children}
  </ButtonBox>
)
