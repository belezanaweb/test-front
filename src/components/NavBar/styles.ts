import styled, { css } from 'styled-components'

export const NavHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
    height: 40px;
  `}
`
