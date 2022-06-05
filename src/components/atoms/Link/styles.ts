import styled from 'styled-components'

import { Props } from './index'

export const NavLink = styled.p<Props>`
  text-decoration: none;
  color: ${(props) => (props.active ? `#FF6C00` : `#CCCCCC`)};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.75px;
`
