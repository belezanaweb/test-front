import React from "react";
import { Container } from "./styles";
import Skeleton from "react-loading-skeleton";

interface IProps {
  subTotal: string;
  shippingTotal: string;
  discount: string;
  total: string;
  isLoading?: boolean;
}

const PriceCartContainer = ({
  discount,
  shippingTotal,
  subTotal,
  total,
  isLoading,
}: IProps) => {
  return isLoading ? (
    <Skeleton height={300} />
  ) : (
    <Container>
      <p>
        <span>PRODUTOS</span>
        <span>{subTotal}</span>
      </p>
      <p>
        <span>FRETE</span>
        <span>{shippingTotal}</span>
      </p>
      <p id="discount">
        <span>DESCONTO</span>
        <span>- {discount}</span>
      </p>
      <p>
        <span>
          <strong>TOTAL</strong>
        </span>
        <span>
          <strong>{total}</strong>
        </span>
      </p>
    </Container>
  );
};

export default PriceCartContainer;
