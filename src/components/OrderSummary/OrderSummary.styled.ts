import styled from 'styled-components'
import { theme } from '../../styles'

import { OrderSummaryProps } from './OrderSummary.types'

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const OrderSummaryItem =
  styled.div <
  OrderSummaryProps >
  `
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: 'Helvetica Neue', sans-serif;
  &:first-child {
    ${theme.typography.body}
  }
  ${({ $highlight }) =>
    $highlight &&
    `
    font-weight: 800;
    font-size: 16px;
  `}
  ${({ $discount }) =>
    $discount &&
    `
    .result {
      color: ${theme.colors.primary[100]};
      font-weight: 800;
    }
  `}
`
