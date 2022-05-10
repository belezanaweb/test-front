import React, {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<ButtonProps, ButtonProps> = (
  { children, ...props },
  ref
) => (
  <S.Wrapper ref={ref} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
