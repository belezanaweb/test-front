import { PropsWithChildren } from 'react'

import { ButtonStyled } from './Button.Styled'
import { ButtonsProps } from './Button.types'

export const Button = ({ onClick, form, variant = 'primary', children }: PropsWithChildren<ButtonsProps>) => {
  return (
    <ButtonStyled onClick={onClick} form={form} variant={variant}>
      {children}
    </ButtonStyled>
  )
}
