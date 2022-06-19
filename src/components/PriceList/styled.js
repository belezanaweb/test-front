import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const StyledPriceListText = styled.h3`
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  font-weight: ${({ total }) => (total ? '700' : '400')};
  color: ${({ discount }) => (discount ? colors.orange : colors['font-color'])};
`

export const StyledPriceListItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 7px;
  }
`

export const StyledPriceListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9px;
`
