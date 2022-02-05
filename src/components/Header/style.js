import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Header = styled.header`
  width: 100vw;
  color: red;
  background-color: ${colors.header.background};
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
`

export const Menu = styled.ul`
  height: 40px;
  display: flex;
`

export const Item = styled.li`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: ${({ active }) =>
    active ? colors.header.links.active : colors.header.links.desactivated};
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
`
