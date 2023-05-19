import { PropsWithChildren } from 'react'

import { ButtonStyled } from './Button.styled'
import { ButtonsProps } from './Button.types'

export const Button = ({
  onClick,
  form,
  $block,
  variant = 'primary',
  children
}: PropsWithChildren<ButtonsProps>) => {
  return (
    <ButtonStyled onClick={onClick} $block={$block} form={form} variant={variant}>
      {children}
    </ButtonStyled>
  )
}
