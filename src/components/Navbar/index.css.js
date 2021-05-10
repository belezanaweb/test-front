import styled from 'styled-components'

import colors from '../../utils/colors'

export const Container = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 ${colors.shadow};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavbarItem = styled.span`
  color: ${(props) => (props.active ? colors.primary : colors.veryLightGrey)};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
`
