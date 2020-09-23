import React from 'react';

import ButtonLink from '~/components/ButtonLink';
import CartProductsContainer from '~/components/CartProductsContainer';
import Title from '~/components/Title';

const CheckoutCart = () => {
  return (
    <>
      <Title>Produtos</Title>
      <CartProductsContainer />

      <br />

      <ButtonLink route="/checkout/cart/payment">Seguir para pagamento</ButtonLink>
    </>
  );
};

export default CheckoutCart;
