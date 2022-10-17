import styled, { css } from 'styled-components'

interface Item {
  active?: boolean;
}

export const Navbar = styled.nav(  ({ theme }) => 
css`
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`)

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 40px;
  column-gap: 7vw;
`

export const Item =
  styled.li <
  Item >
  (({ active, theme }) => css`
    color: ${active ? theme.colors.primary : '#CCC'};
    border: none;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
  `)