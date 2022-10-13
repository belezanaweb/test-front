import styled from 'styled-components'

interface Item {
  active?: boolean;
}

export const Navbar = styled.nav`
  width: 100%;
  background-color: #eae9e9;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`
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
  (({ active, theme }) => `
  color: ${active ? theme.colors.primary : '#CCC'};
  border: none;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  `)
