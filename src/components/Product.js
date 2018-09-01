import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatToReal } from '../utils/currencyFormat'

export const ProductList = styled.ul`
  padding: 1px 0;
`

const ProductImg = styled.div`
  margin-right: 1rem;
`

const ProductItem = styled.li`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  border: var(--border-box);
`

const ProductDetails = styled.div`
  display:flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;

  b {
    align-self: flex-end;
  }
`

const Product = ({
  thumbnail,
  name,
  price,
  hidePrice
}) => (
  <ProductItem>
    <ProductImg>
      <img alt='Product' src={thumbnail} />
    </ProductImg>
    <ProductDetails>
      <span>{name}</span>
      {!hidePrice && <b>{formatToReal(price)}</b>}
    </ProductDetails>
  </ProductItem>
);

Product.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
}

export default Product
