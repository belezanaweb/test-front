import React, { ReactNode } from 'react'
import { ButtonWrapper } from './styles'
import theme from '../../theme'

export type buttonProps = {
  children: ReactNode
  backgroundColor?: keyof typeof theme.colors
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ onClick, backgroundColor, children, ...props }: buttonProps) => {
  return (
    <ButtonWrapper onClick={onClick} backgroundColor={backgroundColor} {...props}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
