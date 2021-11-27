import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.font14};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeight.lh17};
    color: ${theme.color.title};
    text-transform: uppercase;
  `}
`
