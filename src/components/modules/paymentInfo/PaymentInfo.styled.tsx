import styled from 'styled-components'

import { StyledCard } from '../../elements/card/Card.styled'

export const StyledPaymentInfo = styled(StyledCard)`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.paymentInfo.primary};
`
