import React from "react";
import { Container } from "./styles";

interface IProps {
  subTotal: string;
  shippingTotal: string;
  discount: string;
  total: string;
}

const PriceCartContainer = ({
  discount,
  shippingTotal,
  subTotal,
  total,
}: IProps) => {
  return (
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
