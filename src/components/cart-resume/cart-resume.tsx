import * as React from 'react';
import { CartType } from '../../models/cart.model';
import styled, { css } from 'styled-components';

const DefinitionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
  padding: 14px;
  border-radius: 3px;
  border: 1px solid #CCC;
`

const TitleItem = styled.dt<any>`
  flex: 0 0 50%;
  margin-bottom: 10px;

  color: ${props => props.primary && css`
    ${props.theme.palette.primary.main};
  `};

  font-weight: ${props => props.strong ? '700' : 'inherit'};
  text-transform: uppercase;
`

const DetailItem = styled(TitleItem)<any>`
  flex: 0 0 50%;
  margin-bottom: 10px;
  text-align: right;

  color: ${props => props.primary && css`
    ${props.theme.palette.primary.main};
  `};

  font-weight: ${props => props.strong ? '700' : 'inherit'};
`

function convertToCurrencyNumber(num: any): any {
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  return numValue && numValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || null;
}

const CartResume: React.FC<{
  cart: CartType,
}> = ({ cart }) => (
  <DefinitionList>
    <TitleItem>Produtos</TitleItem>
    <DetailItem as="dd">{convertToCurrencyNumber(cart.subTotal)}</DetailItem>
    <TitleItem>Frete</TitleItem>
    <DetailItem as="dd">{convertToCurrencyNumber(cart.shippingTotal)}</DetailItem>
    <TitleItem primary>Desconto</TitleItem>
    <DetailItem as="dd" primary>- {convertToCurrencyNumber(cart.discount)}</DetailItem>
    <TitleItem strong>Total</TitleItem>
    <DetailItem as="dd" strong>{convertToCurrencyNumber(cart.total)}</DetailItem>
  </DefinitionList>
)

export default CartResume;
