import React from 'react';

import {
  Info,
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

const CardProduct = (props) => (
  <Container key={props.product.sku}>
    <ProductImage src={props.product.imageObjects[0].small} alt={props.name} />
    <Info>
      <ProductName>{props.product.name}</ProductName>
      <ProductPrice>R$ {props.product.priceSpecification.price}</ProductPrice>
    </Info>
  </Container>
);

export default CardProduct;
