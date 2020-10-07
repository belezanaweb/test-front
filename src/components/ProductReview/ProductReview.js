import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledProduct = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #eee;
  padding: 4px 6px 2px 10px;
  margin-bottom: 15px;
`

const StyledProductName = styled.p`
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  word-spacing: 0.9px;
  margin-top: 10px;
  margin-bottom: 17px;
`

const StyledProductImg = styled.img`
  width: 44px;
  height: 100%;
  margin-right: 8px;
  margin-top: 7px;
`

function ProductReview({ product }) {
  return (
    <StyledProduct>
      <StyledProductImg src={product.imageObjects[0].thumbnail} alt={product.name} />
      <div>
        <StyledProductName>{product.name}</StyledProductName>
      </div>
    </StyledProduct>
  )
}

ProductReview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    imageObjects: PropTypes.array
  }).isRequired
}

export default ProductReview
