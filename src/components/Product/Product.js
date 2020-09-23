import React from 'react';

import { formatToCurrency } from '~/utils/format-currency';

import { Container, ProductImage, ProductContent, ProductTitle, ProductPrice } from './styles';

const Product = ({ image, title, price, showPrice = true }) => {
  return (
    <Container>
      <ProductImage src={image} />
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        {showPrice && <ProductPrice>{formatToCurrency(price)}</ProductPrice>}
      </ProductContent>
    </Container>
  );
};

export default Product;
