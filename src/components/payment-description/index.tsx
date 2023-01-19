import React from 'react';
import { useAsyncValue } from 'react-router-dom';
import styled from 'styled-components';
import { useBasket } from '../../services/basket/hooks';
import { getTotalBasket } from '../../services/basket/helpers';


const PaymentDescription: React.FC = () => {
  const { basket }  = useBasket()

  if (!basket) {
    return null;
  }

  const total = getTotalBasket(basket);
  const discount = basket?.discount;
  const { shippingTotal } = basket;
  const totalWithDiscount = total + shippingTotal - discount;

  return(
    <Container>
            <Line>
                <Item>PRODUTOS</Item>
                <Item> R$ {total.toFixed(2)}</Item>
            </Line>
            <Line>
                <Item>FRETE</Item>
                <Item> R$ {basket?.shippingTotal?.toFixed(2)}</Item>
            </Line>
            <Line>
                <ItemHighlighted>DESCONTO</ItemHighlighted>
                <ItemHighlighted> - R$ {discount.toFixed(2)}</ItemHighlighted>
            </Line>
            <Line>
                <ItemTotal>TOTAL</ItemTotal>
                <ItemTotal> R$ {totalWithDiscount.toFixed(2)}</ItemTotal>
            </Line>
    </Container>
  )
};


const Container = styled.div`
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #CCC;
    padding: 15px 14px 5px;
    margin: 0 0 20px;
`;

const Line = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
`

const Item = styled.span`
    color: #212122;
    font-size: 14px;
    line-height: 17px;
`

const ItemHighlighted = styled.span`
    color: #FF7800;
    font-size: 14px;
    line-height: 17px;
`

const ItemTotal = styled.span`
    font-weight: bold;
`


export default PaymentDescription;