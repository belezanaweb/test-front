import styled from 'styled-components'
import { colors } from '../../styles'

export const OrderConfirmationStyle = styled.div`
  color: ${colors.primary};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  text-transform: uppercase;
  .icon {
    width: 80px;
    height: 80px;
    border: 4px solid ${colors.primary};
    padding: 5px;
    border-radius: 100px;
    svg {
      fill: ${colors.primary};
    }
  }
`
