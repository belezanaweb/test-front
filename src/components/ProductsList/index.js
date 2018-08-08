import React, { Fragment } from 'react';

/**
 * Styles
 */
import { SectionTitle, Inner } from '../../assets/global';
import { Products, Product, ProductDetails, ProductName, ProductPrice } from './styles';

const ProductsList = () => (
  <Fragment>
    <Inner>
      <SectionTitle>Produtos</SectionTitle>
      <Products>
        <Product>
          <figure>
            <img src="//placehold.it/65x65" alt="." />
          </figure>
          <ProductDetails>
            <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
            <ProductPrice>R$ 150,00</ProductPrice>
          </ProductDetails>
        </Product>
        <Product>
          <figure>
            <img src="//placehold.it/65x65" alt="." />
          </figure>
        </Product>
        <Product>
          <figure>
            <img src="//placehold.it/65x65" alt="." />
          </figure>
        </Product>
      </Products>
    </Inner>
  </Fragment>
);

export default ProductsList;
