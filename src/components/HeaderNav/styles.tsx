import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    max-width: ${theme.container.desktop};
    background: ${theme.color.white};
    height: 40px;
    align-items: flex-end;
    padding-bottom: 12px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  `}
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
`
