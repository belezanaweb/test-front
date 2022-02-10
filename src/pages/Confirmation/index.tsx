import React, { useContext } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container, PaymentMethod, CheckConfirm } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

import Check from '../../assets/check.png';

export default function Confirmation() {
  const { cartItems } = useContext(StorageContext);
  const { creditCard } = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <Container>
      <CheckConfirm>
        <div className="check">
          <img src={Check} alt="check" />
        </div>
        <span>Compra efetuada com Sucesso</span>
      </CheckConfirm>
      <PaymentMethod>
        <h2>Pagamento</h2>
        {creditCard && (
          <div>
            <li>{creditCard.cardNumber}</li>
            <li>{creditCard.titularName}</li>
            <li>{creditCard.validate}</li>
          </div>
        )}
      </PaymentMethod>

      {cartItems && (
        <>
          <ItemsList cart={cartItems} />
          <SumInfo cart={cartItems} />
        </>
      )}
    </Container>
  );
}
