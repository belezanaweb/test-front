import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { device } from '../../styles/breakpoints'

export const Header = styled.header`
  height: 100%;
  background: var(--colors-white);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const NavBar = styled.nav`
  display: flex;
  padding: var(--spacing-0) var(--spacing-2);
  height: 100%;
  align-items: center;
  justify-content: space-between;

  .active {
    color: var(--colors-orange-200);
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: bold;
  color: var(--colors-gray-200);

  &:hover {
    color: var(--colors-orange-300);
  }

  @media ${device.desktop} {
    font-size: var(--font-size-md);
  }
`
