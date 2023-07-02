import styled, { css } from 'styled-components'
import { buttonProps } from '.'

type wrapperProps = Pick<buttonProps, 'backgroundColor'>

export const ButtonWrapper =
  styled.button <
  wrapperProps >
  `
  ${({ theme, backgroundColor }) => css`
    width: 100%;
    border: none;
    background: ${backgroundColor ? theme.colors[backgroundColor] : theme.colors.purple};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    cursor: pointer;
  `}
`
