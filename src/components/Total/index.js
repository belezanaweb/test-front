import React, { useEffect, useContext } from 'react';
import { Container, LineContainer } from './styles';
import CartContext from '../../contexts/CartContext'
import { useHistory } from "react-router-dom";

function Total() {
  const cartContext = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    if (!cartContext.cart.subTotal) {
      history.push("/cart")
    }
  }, []);

  return (
    <Container>
            <LineContainer>
              <p>produtos</p>
              {cartContext.cart.subTotal && <p>R${cartContext.cart.subTotal.toFixed(2)}</p>}
            </LineContainer>
            <LineContainer>
              <p>frete</p>
              {cartContext.cart.shippingTotal && <p>R${cartContext.cart.shippingTotal.toFixed(2)}</p>}
            </LineContainer>
            <LineContainer inputColor={"#FF7800"}>
              <p>desconto</p>
              {cartContext.cart.discount && <p>- R${cartContext.cart.discount.toFixed(2)}</p>}
            </LineContainer>
            <LineContainer inputWeight={"500"}>
              <p>TOTAL</p>
              {cartContext.cart.total && <p>R${cartContext.cart.total.toFixed(2)}</p>}
            </LineContainer>
    </Container>
  );
}
export default Total;