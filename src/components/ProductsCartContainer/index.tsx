import React from "react";
import { IItem } from "../../@types/cart";
import {
  Container,
  PriceSpecificationContainer,
  ProductContainer,
} from "./styles";

interface IProps {
  items: IItem[] | null;
}

const ProductsCartContainer = ({ items }: IProps) => {
  return (
    <Container>
      {items?.map(({ product }) => (
        <ProductContainer key={product.sku}>
          <img src={product.imageObjects[0].small} alt="imagem do produto" />
          <PriceSpecificationContainer>
            <span>{product.name}</span>
            <span>
              <strong>{product.priceSpecification.price}</strong>
            </span>
          </PriceSpecificationContainer>
        </ProductContainer>
      ))}
    </Container>
  );
};

export default ProductsCartContainer;
