import React from 'react';
import styled from 'styled-components';

import Cart from '../../types/Cart';
import { toMoney } from '../../utils/money';

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
  color: ${({ highlight, theme }) => {
    return highlight ? theme.colors.primaryLight : theme.colors.grayExtraDark;
  }};
  line-height: 17px;
  text-transform: uppercase;
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
  data: Omit<Cart, 'items'> | null;
}

export const Total: React.FC<TotalProps> = ({ data }) => {
  if (data === null) return null;

  const { discount, shippingTotal, subTotal, total } = data;

  return (
    <StyledTotal>
      <Row>
        <Col>Produtos</Col>
        <Col>{toMoney(subTotal)}</Col>
      </Row>
      <Row>
        <Col>Frete</Col>
        <Col>{toMoney(shippingTotal)}</Col>
      </Row>
      <Row>
        <Col highlight>Desconto</Col>
        <Col highlight>{toMoney(discount * -1)}</Col>
      </Row>
      <Result>
        <ResultKey>Total</ResultKey>
        <ResultValue>{toMoney(total)}</ResultValue>
      </Result>
    </StyledTotal>
  );
}

export default Total;
