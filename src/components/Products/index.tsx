import React, { useContext } from 'react';

import { ResumeContext } from 'context/resume';

import { usePrice } from 'hooks/price';

import {
  Container,
  ProductsContainer,
  Product,
  ProductImage,
  ProductInfo,
} from './styles';

const Products: React.FC = () => {
  const { cartResume } = useContext(ResumeContext);
  const { formatPrice } = usePrice();

  return (
    <Container>
      <h1>Produtos</h1>
      <ProductsContainer>
        <Product>
          {cartResume && (
            cartResume.items.map((item) => (
              <div key={item.product.sku}>
                <ProductImage src={item.product.imageObjects[0].small} />
                <ProductInfo>
                  <p>{item.product.name}</p>
                  <span>
                    R$ {formatPrice(item.product.priceSpecification.price)}
                  </span>
                </ProductInfo>
              </div>
            ))
          )}
        </Product>
      </ProductsContainer>
    </Container>
  );
};

export default Products;
