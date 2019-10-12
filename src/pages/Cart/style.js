import styled from 'styled-components'
import theme from '../../theme'

export const Title = styled.h1`
  padding: 0 1.308rem;
  text-transform: uppercase;
  color: #ccc;
  font-size: 1.077rem;
  margin-top: 0.7692rem;
  margin-bottom: 0.3846rem;
`

export const CartPage = styled.div`
  background-color: ${theme.secundaryBgColor};
`

export const ProductContainer = styled.div`
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    background-color: ${theme.bgColor};
    margin: 0 0.6923rem;
    padding: 0.9231rem;

    .product {
      min-height: 5.625rem;
      border-radius: ${theme.borderRadius};
      border: ${theme.border};
      margin-bottom: 0.9375rem;
    }
`