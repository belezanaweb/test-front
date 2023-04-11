import { ReactNode } from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | undefined;
  onClick?: () => void;
}

export function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}
