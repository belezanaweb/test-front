import React from 'react';

import ButtonLink from '~/components/ButtonLink';
import CartProductsContainer from '~/components/CartProductsContainer';
import CartResumeContainer from '~/components/CartResumeContainer';

const CheckoutCart = () => {
  return (
    <>
      <CartProductsContainer />

      <CartResumeContainer />

      <ButtonLink route="/checkout/cart/payment">Seguir para pagamento</ButtonLink>
    </>
  );
};

export default CheckoutCart;
