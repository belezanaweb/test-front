import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import Box from '../../components/Box/Box'
import ProductReview from '../../components/ProductReview/ProductReview'
import Total from '../../components/Total/Total'

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

function Confirmation({ paymentData, data = {} }) {
  const products = data?.items?.map((item) => (
    <ProductReview product={item.product} key={item.product.sku} />
  ))
  return (
    <>
      <StyledSuccess>Compra efetuada com sucesso</StyledSuccess>

      <Box title={'Pagamento'}>
        <StyledData>{paymentData?.cardNumber.slice(-4)}</StyledData>
        <StyledData>{paymentData?.name}</StyledData>
        <StyledData>{paymentData?.date}</StyledData>
      </Box>

      <Box title="Produtos">{products}</Box>

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
