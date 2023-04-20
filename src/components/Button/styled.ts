import styled, { css } from 'styled-components'
import { ButtonProps } from './interfaces'

export const Button = styled.button<ButtonProps>`
  border: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.padding.p8};
  border-radius: ${({ theme }) => theme.border.radius.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`
