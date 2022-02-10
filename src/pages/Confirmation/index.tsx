import React, { useContext } from 'react';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container, PaymentMethod } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

export default function Confirmation() {
  const { cartItems } = useContext(StorageContext);

  return (
    <Container>
      <PaymentMethod>
        <h2>Pagamento</h2>
        <div>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasdad</li>
        </div>
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
