import styled from 'styled-components'
import theme from 'theme'

export const CartCheckout = styled.div`
  padding: 1.154rem 1rem 1rem 1.077rem;
  margin: 1.538rem 0;
  box-sizing: border-box;
  border-radius: ${theme.borderRadius};
  border: ${theme.border('#ccc')};
`

export const CheckoutInfo = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  color: ${props => props.primary ? theme.primary : theme.textColor};
  font-size: 1.077rem;
  line-height: 1.308rem;

  &:not(:first-child) {
    margin-top: ${props => props.primary ? '0.6154rem' : '0.6923rem'};
  }

  &:last-child {
    margin-top: 1.231rem;
    font-weight: ${theme.fontWeightBold}
  }
`
