import React, { useContext } from 'react';

import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';
import PaymentMethod from '../../../../components/PaymentMethod';

import { Container, CheckConfirm, Content } from './styles';

import Check from '../../../../assets/check.png';
import { useCartContext } from '../..';

export default function Confirmation() {
  const { cartItems, creditCardInfo } = useCartContext();

  return (
    <Container>
      <CheckConfirm>
        <div className="check">
          <img src={Check} alt="check" />
        </div>
        <span>Compra efetuada com Sucesso</span>
      </CheckConfirm>

      {cartItems && (
        <Content>
          <PaymentMethod creditCardInfo={creditCardInfo} />
          <ItemsList cart={cartItems} />
          <SumInfo cart={cartItems} />
        </Content>
      )}
    </Container>
  );
}
