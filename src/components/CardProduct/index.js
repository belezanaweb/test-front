import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Info,
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

const CardProduct = (props) => (
  <Container>
    <ProductImage src={props.product.imageObjects[0].small} alt={props.name} />
    <Info>
      <ProductName>{props.product.name}</ProductName>
      <ProductPrice>R$ {props.product.priceSpecification.price}</ProductPrice>
    </Info>
  </Container>
);

CardProduct.propTypes = {
  product: PropTypes.object.isRequired
};


export default CardProduct;
