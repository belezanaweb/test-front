import styled, { css } from 'styled-components'
import { TextStyledProps } from './interfaces'

export const Tag = styled.span<TextStyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'unset')};
  color: ${({ theme, $color }) => theme.color[$color] || theme.color.black};
  font-weight: ${({ theme, weight }) => weight || theme.font.weight.regular};
  font-size: ${({ theme, size }) => theme.font.size[size] || theme.font.size.small};

  ${({ decoration }) =>
    decoration &&
    css`
      text-decoration: ${decoration};
    `}
`
