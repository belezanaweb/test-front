import React from 'react';

import { useSelector } from 'react-redux';

import { formatToCurrency } from '~/utils/format-currency';

import { ResumeCardboard, ResumeLine } from './styles';

const CartResumeContainer = () => {
  const { subTotal = 0, shippingTotal = 0, discount = 0, total = 0 } = useSelector(
    (state) => state.cart || {}
  );

  return (
    <ResumeCardboard out={true}>
      <ResumeLine>
        <span>PRODUTOS</span>
        <span>{formatToCurrency(subTotal)}</span>
      </ResumeLine>
      <ResumeLine>
        <span>FRETE</span>
        <span>{formatToCurrency(shippingTotal)}</span>
      </ResumeLine>
      <ResumeLine featured>
        <span>DESCONTO</span>
        <span>- {formatToCurrency(discount)}</span>
      </ResumeLine>
      <ResumeLine total>
        <span>TOTAL</span>
        <span>{formatToCurrency(total)}</span>
      </ResumeLine>
    </ResumeCardboard>
  );
};

export default CartResumeContainer;
