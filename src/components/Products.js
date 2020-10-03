import React from "react";

import ProductsCSS from '../styles/Products';

function Products() {

  const { Container, List, Product, Image, Info, Description, Price} = ProductsCSS;

  return (
    <Container>
      <List>
        <Product>
          <Image src="https://via.placeholder.com/65" />
          <Info>
            <Description>
              L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
            </Description>
            <Price>R$ 225,90</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://via.placeholder.com/65" />
          <Info>
            <Description>
              L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
            </Description>
            <Price>R$ 225,90</Price>
          </Info>
        </Product>

        <Product>
          <Image src="https://via.placeholder.com/65" />
          <Info>
            <Description>
              L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
            </Description>
            <Price>R$ 225,90</Price>
          </Info>
        </Product>
      </List>
    </Container>
  );
}

export default Products;
