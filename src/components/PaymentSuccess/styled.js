import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const StyledPaymentSuccessText = styled.p`
  text-transform: uppercase;
  color: ${colors.orange};
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
`
export const StyledPaymentSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 12px 0 20px 0;
`
