import React from 'react'
import PropTypes from 'prop-types'

import { Container, Image, Wrapper, Description, Price } from './styles'

const Product = ({ image, name, price, isFinish }) => (
  <Container>
    <Image isFinish={isFinish}>
      <img src={image} alt={name} />
    </Image>

    <Wrapper>
      <Description>{name}</Description>
      {!isFinish && <Price>{price}</Price>}
    </Wrapper>
  </Container>
)

Product.defaultProps = {
  isFinish: false
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isFinish: PropTypes.bool
}

export default Product
