import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow};
  margin-bottom: 20px;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 38px;
  padding: 12px;
  list-style: none;
  margin: 0;
`

export const ListItem = styled.li`
  color: ${(props) => (props.active ? props.theme.colors.orange : props.theme.colors.lightGray)};
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  font-size: ${(props) => props.theme.fonts.header};
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.3s;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fonts.desktop};
  }
`
