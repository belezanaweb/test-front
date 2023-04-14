import { ReactNode } from 'react'

import { ButtonWrapper } from './styles'

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, variant, onClick, disabled = false }: ButtonProps) {
  return (
    <ButtonWrapper variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  )
}
