import React from 'react';
import { useBasket } from '../../services/basket/hooks';
import { getTotalBasket } from '../../services/basket/helpers';
import * as S from './styles'


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
    <S.Container>
            <S.Line>
                <S.Item>PRODUTOS</S.Item>
                <S.Item data-testid="total">R$ {total.toFixed(2)}</S.Item>
            </S.Line>
            <S.Line>
                <S.Item>FRETE</S.Item>
                <S.Item data-testid="frete">R$ {basket?.shippingTotal?.toFixed(2)}</S.Item>
            </S.Line>
            <S.Line>
                <S.ItemHighlighted>DESCONTO</S.ItemHighlighted>
                <S.ItemHighlighted data-testid="discount">- R$ {discount.toFixed(2)}</S.ItemHighlighted>
            </S.Line>
            <S.Line>
                <S.ItemTotal>TOTAL</S.ItemTotal>
                <S.ItemTotal data-testid="totalWithDiscount">R$ {totalWithDiscount.toFixed(2)}</S.ItemTotal>
            </S.Line>
    </S.Container>
  )
};


export default PaymentDescription;