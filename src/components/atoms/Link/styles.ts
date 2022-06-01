import styled from 'styled-components'

import { Props } from './index'

export const NavLink =
  styled.a <
  Props >
  `
  text-decoration: none;
  color: ${(props) => (props.active ? `#FF6C00` : `#CCCCCC`)}
`
