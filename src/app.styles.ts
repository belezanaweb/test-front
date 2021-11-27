import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.background};
    height: 100vh;
    width: 100%;
  `}
`
