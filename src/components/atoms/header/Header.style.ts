import styled from 'styled-components'

interface ListItem {
  active?: boolean
}

export const Navbar = styled.nav(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.paper};
`
)

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 38px;
  padding: 12px;
  list-style: none;
  margin: 0;
`

export const ListItem = styled.li<ListItem>(
  ({ active, theme }) => `
  color: ${active ? theme.colors.accent : theme.colors.lightGray};
  background-color: ${theme.colors.white};
  border: none;
  font-size: ${theme.fonts.header};
  font-weight: 700;
  text-transform: uppercase;
  `
)
