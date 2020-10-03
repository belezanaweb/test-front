import React from 'react';

import {
  Container,
  ProductsContainer,
  Product,
  ProductImage,
  ProductInfo,
} from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <h1>Produtos</h1>
      <ProductsContainer>
        <Product>
          <div>
            <ProductImage src="https://via.placeholder.com/65x65.png" />
            <ProductInfo>
              <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
              <span>R$ 225,90</span>
            </ProductInfo>
          </div>
        </Product>
      </ProductsContainer>
    </Container>
  );
};

export default Products;
