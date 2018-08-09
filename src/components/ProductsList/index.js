import React, { Fragment } from 'react';

/**
 * Styles
 */
import { SectionTitle } from '../../assets/global';
import { Products, Product, ProductDetails, ProductName, ProductPrice } from './styles';

const ProductsList = ({ readOnly }) => (
  <Fragment>
    <SectionTitle>Produtos</SectionTitle>
    <Products>
      <Product>
        <figure>
          <img src="//placehold.it/65x65" alt="." />
        </figure>
        <ProductDetails>
          <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
          {!readOnly && <ProductPrice>R$ 150,00</ProductPrice> }
        </ProductDetails>
      </Product>
      <Product>
        <figure>
          <img src="//placehold.it/65x65" alt="." />
        </figure>
        <ProductDetails>
          <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
          {!readOnly && <ProductPrice>R$ 150,00</ProductPrice> }
        </ProductDetails>
      </Product>
      <Product>
        <figure>
          <img src="//placehold.it/65x65" alt="." />
        </figure>
        <ProductDetails>
          <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
          {!readOnly && <ProductPrice>R$ 150,00</ProductPrice> }
        </ProductDetails>
      </Product>
      <Product>
        <figure>
          <img src="//placehold.it/65x65" alt="." />
        </figure>
        <ProductDetails>
          <ProductName>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</ProductName>
          {!readOnly && <ProductPrice>R$ 150,00</ProductPrice> }
        </ProductDetails>
      </Product>
    </Products>
  </Fragment>
);

export default ProductsList;
