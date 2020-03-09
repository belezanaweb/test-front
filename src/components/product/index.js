import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatToCurrency } from '../../lib/currency';

const ProductCard = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0.625rem;

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    &,
    &:last-child {
      margin-bottom: 0;
    }

    width: 33%;
    margin-right: 0.75rem;

    flex-direction: column;
    align-items: flex-start;

    padding: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ProductImage = styled.img`
  flex: 0 0 65px;
  width: 65px;
  margin-right: 0.625rem;
  margin-top: auto;

  @media (min-width: 768px) {
    margin: 0 auto auto;

    flex: 0 0 130px;
    width: 130px;
  }
`;

const ProductTitle = styled.h3`
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 0.844rem;
  margin: 0 0 1.375rem;
`;

const ProductPrice = styled.span`
  text-align: right;
  font-size: 0.875rem;
  font-weight: ${props => props.theme.fonts.weights.bold};

  display: block;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ProductsGroup = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: flex;
    width: 100%;
    align-items: stretch;
  }
`;

const Product = function({ image, title, price, showPrice = true }) {
  return (
    <ProductCard>
      <ProductImage src={image} />
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        {showPrice && <ProductPrice>{formatToCurrency(price)}</ProductPrice>}
      </ProductContent>
    </ProductCard>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showPrice: PropTypes.bool
};

export default Product;
