import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const HeaderItem = styled.h1`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ active }) => (active ? colors.orange : colors['shadow-grey']) };
`

export const StyledHeader = styled.header`
  width: 100vw;
  height: 40px;
  background-color: ${ () => colors.white };
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
`