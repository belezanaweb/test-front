import React from 'react';
import { PropTypes } from 'prop-types';

import { formatMoney } from '../../utils';

import {
  Info,
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

const getPrice = (price, showPrice) => {
  if (!showPrice) {
    return null;
  }

  return (
    <ProductPrice>R$ {formatMoney(price)}</ProductPrice>
  );
}

const CardProduct = (props) => (
  <Container thin={props.thin}>
    <ProductImage thin={props.thin} src={props.product.imageObjects[0].small} alt={props.name} />
    <Info>
      <ProductName>{props.product.name}</ProductName>
      {getPrice(props.product.priceSpecification.price, props.showPrice, props.thin)}
    </Info>
  </Container>
);

CardProduct.propTypes = {
  thin: PropTypes.bool,
  showPrice: PropTypes.bool,
  product: PropTypes.object.isRequired
};

export default CardProduct;
