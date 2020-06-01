import styled, { css } from 'styled-components';

import { Image, ImageWrapper, ItemPrice } from './ProductListItem';

interface ProductListProps {
  size?: 'sm' | 'md';
}

const ProductList = styled.div<ProductListProps>`
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          ${ImageWrapper} {
            flex: 0 42px;
          }

          ${Image} {
            height: 42px;
          }

          ${ItemPrice} {
            display: none;
          }
        `;
      case 'md':
      default:
        return css``;
    }
  }}
`;

ProductList.defaultProps = {
  size: 'md',
};

export default ProductList;