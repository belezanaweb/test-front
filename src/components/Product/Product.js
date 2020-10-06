import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledProduct = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #eee;
  padding: 4px 6px 4px 10px;
  margin-bottom: 15px;
`

const StyledProductName = styled.p`
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  word-spacing: 0.9px;
  margin-top: 7px;
  margin-bottom: 17px;
`

const StyledProductImg = styled.img`
  width: 64px;
  height: 100%;
  margin-right: 10px;
  margin-top: 7px;
`

const StyledProductPrice = styled.span`
  margin-right: 3px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  float: right;
  margin-bottom: 7px;
`

function Product({ product }) {
  const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    product.priceSpecification.price
  )
  return (
    <StyledProduct>
      <StyledProductImg src={product.imageObjects[0].small} alt={product.name} />
      <div>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductPrice>{price}</StyledProductPrice>
      </div>
    </StyledProduct>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imageObjects: PropTypes.array
  }).isRequired
}

export default Product
