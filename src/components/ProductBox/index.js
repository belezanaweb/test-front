import React from 'react'
import PropTypes from 'prop-types'

import { formatToReal } from '../../utils/currencyFormat'

import { Container, ProductItem, ProductDescription } from './styles'

const ProductBox = ({ thumbnail, description, price }) => (
  <Container>
    <ProductItem>
      <img src={thumbnail} alt={description} />
      <ProductDescription>
        <p className="description">{description}</p>
        <p className="price">{formatToReal(price)}</p>
      </ProductDescription>
    </ProductItem>
  </Container>
)

ProductBox.propTypes = {
  thumbnail: PropTypes.string,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

ProductBox.defaultProps = {
  thumbnail: 'http://via.placeholder.com/50x50'
}

export default ProductBox
