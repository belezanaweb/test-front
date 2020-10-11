import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import {
  ProductCard, Image, Infos, Name, Price,
} from './style';

const CardProduct = (props) => {
  const { height, products, isRenderPrice } = props;

  return (
    <Card title="PRODUTOS" heightBox={height} paddingBox="4vh">
      {products && products.map((item) => (
        <ProductCard isRenderPrice={isRenderPrice} key={item.id}>
          <Image teste={item.product.imageObjects[0]} />
          <Infos>
            <Name>
              {item.product.name}
            </Name>
            { isRenderPrice
              && (
              <Price>
                R$
                {' '}
                {item.product.priceSpecification.price
                && item.product.priceSpecification.price.toFixed(2)}
              </Price>
              )}
          </Infos>
        </ProductCard>
      ))}
    </Card>
  );
};

CardProduct.propTypes = {
  height: PropTypes.number,
  products: PropTypes.objectOf.isRequired,
  isRenderPrice: PropTypes.func,
};

CardProduct.defaultProps = {
  height: '',
  isRenderPrice: false,
};

export default CardProduct;
