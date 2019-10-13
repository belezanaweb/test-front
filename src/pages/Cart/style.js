import styled from 'styled-components'
import theme from '../../theme'

export const Title = styled.h1`
  padding: 0 0.8462rem;
  text-transform: uppercase;
  color: #999;
  font-weight: ${theme.fontWeightBold};
  font-size: 1.077rem;
  margin-bottom: 0.3846rem;
`

export const CartPage = styled.div`
  padding: 0 0.6923rem;
  padding-top: 0.7692rem;
  background-color: ${theme.secundaryBgColor};
`

export const ProductList = styled.div`
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.bgColor};
  padding: 0.9231rem;
`

export const Product = styled.div`
  display: flex;
  padding: 0.8462rem 0.7692rem 1.077rem 0.7692rem;
  min-height: 5.625rem;
  border-radius: ${theme.borderRadius};
  border: ${theme.border()};
  margin-bottom: 1.1539rem;

  img {
    width: 65px;
    height: 65px;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8462rem;
  justify-content: space-between;

  p {
    margin-top: 0.07692rem;
    width: 220px;
    color: ${theme.textColor};
    line-height: 1.231rem;
  }

  span {
    font-weight: ${theme.fontWeightBold};
    color: ${theme.textColor};
    font-size: 1.077rem;
    line-height: 1.308rem;
    text-align: right;
  }
`

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
