import React from "react";

import { ProductsCSS } from '../styles';
import { Currency } from '../components';

function Products({ items }) {

  const { Container, List, Product, Image, Info, Description, Price } = ProductsCSS;

  return (
    <Container>
      <List>
        {
          items.map( ({ product }) =>
            <Product key={product.sku}>
              <Image src={product.imageObjects[0].small} />
              <Info>
                <Description>{product.name}</Description>
                <Price><Currency value={product.priceSpecification.price} /></Price>
              </Info>
            </Product>
          )
        }
      </List>
    </Container>
  );
}

export default Products;
