import styled from 'styled-components'
import theme from 'theme'

export const Product = styled.div`
  display: flex;
  padding: 0.8462rem 0.7692rem 1.077rem 0.7692rem;
  min-height: 5.625rem;
  border-radius: ${theme.borderRadius};
  border: ${theme.border()};
  margin: 0.1538rem 0.2308rem;
  margin-bottom: 1.1539rem;

  &:last-child {
    margin-bottom: 0.1538rem;
  }

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
