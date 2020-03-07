import React from 'react';
import styled, { css } from 'styled-components';

import { useSelector } from 'react-redux';

import { Cardboard } from '..';

import { formatToCurrency } from '../../lib/currency';

const ResumeLine = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0 0 0;

  font-size: 0.875rem;

  &:first-child {
    margin-top: 0;
  }

  ${({ total }) =>
    total &&
    css`
      font-weight: ${props => props.theme.fonts.weights.bold};
      margin-top: 1rem;
    `}

  ${({ featured }) =>
    featured &&
    css`
      color: ${props => props.theme.colors.primary};
    `}
`;

const ResumeCardboard = styled(Cardboard)`
  margin: 1.25rem 0;
`;

const CartResumeContainer = function() {
  const { subTotal = 0, shippingTotal = 0, discount = 0, total = 0 } = useSelector(
    state => state.cart || {}
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
