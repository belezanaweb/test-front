import React from 'react'
import PropTypes from 'prop-types'

import { Container, Image, Wrapper, Description, Price } from './styles'

const Product = ({ image, name, price }) => (
  <Container>
    <Image>
      <img src={image} alt={name} />
    </Image>

    <Wrapper>
      <Description>{name}</Description>
      <Price>{price}</Price>
    </Wrapper>
  </Container>
)

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Product
