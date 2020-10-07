import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

import data from '../../data/endpoint.json'

import Product from '../../components/Product/Product'
import Total from '../../components/Total/Total'

const StyledProductList = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 12px 12px 0 13px;
  margin: 10px 10px 19px 9px;
`

const StyledPageTitle = styled.h2`
  color: #999;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: -7px;
`

const StyledButton = styled.button`
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  margin: 0 auto;
  display: flex;
  padding: 20px 18px 16px 18px;
`

const products = data.items.map((item) => <Product product={item.product} key={item.product.sku} />)

function Basket() {
  const history = useHistory()

  return (
    <>
      <StyledPageTitle>Produtos</StyledPageTitle>
      <StyledProductList>{products}</StyledProductList>
      <Total
        subTotal={data.subTotal}
        shippingTotal={data.shippingTotal}
        discount={data.discount}
        total={data.total}
      />
      <StyledButton type="button" onClick={() => history.push('/pagamento')}>
        Seguir para o pagamento
      </StyledButton>
    </>
  )
}

export default Basket
