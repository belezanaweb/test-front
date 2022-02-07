import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const List = styled.ul`
  width: 100%;
`

export const Item = styled.li`
  padding: ${({ hidePrice }) => (hidePrice ? '12px 10px 11px 10px' : '12px 10px 14px 10px')};
  margin-bottom: 15px;
  border: 1px solid ${colors.productList.border};
  border-radius: 3px;
  display: flex;
`
