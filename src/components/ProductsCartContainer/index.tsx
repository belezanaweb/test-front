import React from "react";
import { IItem } from "../../@types/cart";
import { useDeviceSize } from "../../contexts/deviceSize";
import {
  Container,
  PriceSpecificationContainer,
  ProductContainer,
} from "./styles";

interface IProps {
  items: IItem[] | null;
}

const ProductsCartContainer = ({ items }: IProps) => {
  const size = useDeviceSize();

  return (
    <Container>
      {items?.map(({ product }) => (
        <ProductContainer key={product.sku}>
          <img
            data-testid="productImage"
            src={
              size === "default"
                ? product.imageObjects[0].thumbnail
                : product.imageObjects[0][size]
            }
            alt="imagem do produto"
          />
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
