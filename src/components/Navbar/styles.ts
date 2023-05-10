import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.white};
`

export const Menu = styled.ul`
  height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`

export const MenuItem = styled.li`
  display: flex;
  align-items: stretch;

  a {
    text-decoration: none;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray};
    font-size: ${(props) => props.theme.font.size.small};
    display: flex;
    align-items: center;
    padding: 0 12px;

    &.active {
      color: ${(props) => props.theme.colors.black};
      box-shadow: inset 0 -4px 0 ${(props) => props.theme.colors.black};
    }
  }
`
