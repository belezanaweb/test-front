import React from 'react';

import { formatToCurrency } from '~/utils/format-currency';

import {
  ProductContainer,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductPrice
} from './styles';

const Product = ({ image, title, price, showPrice = true }) => {
  return (
    <ProductContainer>
      <ProductImage src={image} />
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        {showPrice && <ProductPrice>{formatToCurrency(price)}</ProductPrice>}
      </ProductContent>
    </ProductContainer>
  );
};

export default Product;
