import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatToReal } from '../utils/currencyFormat';

const Box = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1rem;
  border: var(--border-box);
  margin-top: 2rem;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ active }) => (
    active
      ? 'var(--color-orange-1)'
      : ''
    )};
  font-weight: ${({ strong }) => (
    strong
      ? 'bolder'
      : ''
  )};
  &:last-child {
    margin-top: 1rem;
  }
`

const Summary = ({
  products,
  shipping,
  discount,
  total
}) => (
  <Box>
    <SummaryItem>
      <span>produtos</span>
      <span>{formatToReal(products)}</span>
    </SummaryItem>
    <SummaryItem>
      <span>frete</span>
      <span>{formatToReal(shipping)}</span>
    </SummaryItem>
    <SummaryItem active>
      <span>desconto</span>
      <span>{formatToReal(discount)}</span>
    </SummaryItem>
    <SummaryItem strong>
      <span>total</span>
      <span>{formatToReal(total)}</span>
    </SummaryItem>
  </Box>
)

Summary.propTypes = {
  products: PropTypes.number,
  shipping: PropTypes.number,
  discount: PropTypes.number,
  total: PropTypes.number
}

Summary.defaultProps = {
  products: 0,
  shipping: 0,
  discount: 0,
  total: 0
}

export default Summary;
