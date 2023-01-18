import React from 'react';
import styled from 'styled-components';

const PaymentDescription: React.FC = () => {
  return (
    <Container>
            <Line>
                <Item>PRODUTOS</Item>
                <Item> R$ 624,80</Item>
            </Line>
            <Line>
                <Item>FRETE</Item>
                <Item> R$ 5,30</Item>
            </Line>
            <Line>
                <ItemHighlighted>DESCONTO</ItemHighlighted>
                <ItemHighlighted> - R$ 30,00</ItemHighlighted>
            </Line>
            <Line>
                <ItemTotal>TOTAL</ItemTotal>
                <ItemTotal> R$ 600,10</ItemTotal>
            </Line>
    </Container>
  );
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