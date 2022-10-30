import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PriceCartContainer from "../../components/PriceCartContainer";
import ProductsCartContainer from "../../components/ProductsCartContainer";
import { useCart } from "../../contexts/cart";
import { Container } from "./styles";

const ShoppingCart = () => {
  const navigate = useNavigate();
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
      <Button
        textContent="Seguir para o pagamento"
        onClick={() => navigate("/payment")}
      />
    </Container>
  );
};

export default ShoppingCart;
