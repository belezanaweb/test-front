import React from 'react';

import Text from 'components/Text';
import { maskMoneyPtBr } from '../../utils/mask';

import ProductStyled from './style';

const Product = props => {
  const { item } = props;
  return (
    <ProductStyled data-cy="products">
      <img
        src={item.product.imageObjects[0].thumbnail}
        alt={item.product.name}
      />
      <div>
        <Text size="13px">{item.product.name}</Text>
        {props.showPrice ? (
          <Text size="13px" bold className="price">
            {`R$ ${maskMoneyPtBr(item.product.priceSpecification.price)}`}
          </Text>
        ) : null}
      </div>
    </ProductStyled>
  );
};

export default Product;
