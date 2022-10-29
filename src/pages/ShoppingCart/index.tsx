import React from "react";
import Button from "../../components/Button";
import PriceCartContainer from "../../components/PriceCartContainer";
import ProductsCartContainer from "../../components/ProductsCartContainer";
import { useCart } from "../../contexts/cart";
import { Container } from "./styles";

const ShoppingCart = () => {
  const { cart } = useCart();
  return (
    <Container>
      <ProductsCartContainer items={cart?.items} />
      <PriceCartContainer
        discount={cart.discount}
        shippingTotal={cart.shippingTotal}
        subTotal={cart.subTotal}
        total={cart.total}
      />
      <Button textContent="Seguir para o pagamento" />
    </Container>
  );
};

export default ShoppingCart;
