import React from "react";
import { IItem } from "../../@types/cart";
import Skeleton from "react-loading-skeleton";
import { useDeviceSize } from "../../contexts/deviceSize";
import {
  CardsContainer,
  Container,
  PriceSpecificationContainer,
  ProductContainer,
} from "./styles";

interface IProps {
  items: IItem[] | null;
  useSmallForm?: boolean;
  isLoading?: boolean;
}

const ProductsCartContainer = ({ items, useSmallForm, isLoading }: IProps) => {
  const size = useDeviceSize();

  return (
    <Container>
      <h2>PRODUTOS</h2>
      {isLoading ? (
        <Skeleton height={300} duration={2} />
      ) : (
        <CardsContainer>
          {items?.map(({ product }) => (
            <ProductContainer key={product.sku} useSmallForm={useSmallForm}>
              <img
                data-testid="productImage"
                src={
                  ["default", "small"].includes(size) || useSmallForm
                    ? product.imageObjects[0].small
                    : product.imageObjects[0].medium
                }
                alt="imagem do produto"
              />
              <PriceSpecificationContainer>
                <span>{product.name}</span>
                {!useSmallForm && (
                  <span>
                    <strong>{product.priceSpecification.price}</strong>
                  </span>
                )}
              </PriceSpecificationContainer>
            </ProductContainer>
          ))}
        </CardsContainer>
      )}
    </Container>
  );
};

export default ProductsCartContainer;
