import React from 'react';
import styled from 'styled-components';

import Cart from '../../types/Cart';
import { toMoney } from '../../utils/number';

import Segment from '../Segment';
import Text from '../Text';

const StyledTotal = styled(Segment)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const Col = styled(Text)<{ highlight?: boolean }>`
  line-height: 17px;
  text-transform: uppercase;

  color: ${({ highlight, theme }) => {
    return highlight ? theme.colors.primaryLight : theme.colors.grayExtraDark;
  }};
`;

Col.defaultProps = {
  highlight: false,
};

const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
`;

const ResultValue = styled(Text)`
  color: ${({ theme }) => theme.colors.grayExtraDark};
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 17px;
  text-transform: uppercase;
`;

const ResultKey = ResultValue;

interface TotalProps {
  data: Omit<Cart, 'id' | 'items'> | null;
}

export const Total: React.FC<TotalProps> = ({ data }) => {
  if (data === null) return null;

  const { discount, shippingTotal, subTotal, total } = data;

  return (
    <StyledTotal>
      <Row>
        <Col id="subTotal">Produtos</Col>
        <Col aria-labelledby="subTotal">{toMoney(subTotal)}</Col>
      </Row>
      <Row>
        <Col id="shippingTotal">Frete</Col>
        <Col aria-labelledby="shippingTotal">{toMoney(shippingTotal)}</Col>
      </Row>
      <Row>
        <Col id="discount" highlight>Desconto</Col>
        <Col aria-labelledby="discount" highlight>{toMoney(discount * -1)}</Col>
      </Row>
      <Result>
        <ResultKey id="total">Total</ResultKey>
        <ResultValue aria-labelledby="total">{toMoney(total)}</ResultValue>
      </Result>
    </StyledTotal>
  );
}

export default Total;
