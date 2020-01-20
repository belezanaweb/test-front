import styled from 'styled-components'
import { colors } from '../../styles'

export const CartSummaryStyle = styled.section`
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 3px;
  border: 1px solid ${colors.greyDark};
  .summary-item {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 0.87rem;
  }
  .summary-item:last-of-type {
    font-weight: bold;
    margin-top: 20px;
  }
  .summary-item--discount {
    color: ${colors.primary};
  }
`
