import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import data from '../../data/endpoint.json'

import ProductReview from '../../components/ProductReview/ProductReview'
import Total from '../../components/Total/Total'

const StyledBox = styled.div`
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

const StyledSuccess = styled.h2`
  color: #ff7800;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
`

const StyledData = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 2px 0;
`

const products = data.items.map((item) => (
  <ProductReview product={item.product} key={item.product.sku} />
))

function Confirmation({ paymentData }) {
  return (
    <>
      <StyledSuccess>Compra efetuada com sucesso</StyledSuccess>
      <StyledPageTitle>Pagamento</StyledPageTitle>
      <StyledBox>
        <StyledData>{paymentData?.cardNumber.slice(-4)}</StyledData>
        <StyledData>{paymentData?.name}</StyledData>
        <StyledData>{paymentData?.date}</StyledData>
      </StyledBox>

      <StyledPageTitle>Produtos</StyledPageTitle>
      <StyledBox>{products}</StyledBox>
      <Total
        subTotal={data.subTotal}
        shippingTotal={data.shippingTotal}
        discount={data.discount}
        total={data.total}
      />
    </>
  )
}

Confirmation.propTypes = {
  paymentData: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
}

export default Confirmation
