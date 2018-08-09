import styled from 'styled-components'

export const Container = styled.nav`
  background-color: #fff;
  padding: 12px 18px;

  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Link = styled.a`
  font-size: 0.92rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
`

export const Item = styled.li`
  &:first-child {
    ${Link} {
      color: #ff7800;
    }
  }
`
