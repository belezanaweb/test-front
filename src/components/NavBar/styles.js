import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

const activeClassName = 'nav-item-active'

export const Container = styled.div`
  @media (min-width: 1000px) {
  }
`

export const Nav = styled(NavLink).attrs({ activeClassName })`
  background-color: ${theme.containerBackground};
  padding: 2%;
  display: flex;
  justify-content: space-around;
  height: 3.5rem;
  align-items: center;
  text-decoration: none;
  color: #ccc;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: ${theme.mainColor};
    font-weight: 700;
    text-align: center;
  }

  &.${activeClassName} {
    color: ${theme.mainColor};
    font-weight: 700;
    text-align: center;
  }
`
