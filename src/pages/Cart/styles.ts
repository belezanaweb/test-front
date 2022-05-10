import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MenuWrapper = styled.header`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`

    `}
  `}
`

export const CartWrapper = styled.section``
