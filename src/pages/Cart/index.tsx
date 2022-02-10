import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

export default function Cart() {
  const { cartItems } = useContext(StorageContext);
  const navigate = useNavigate();

  return (
    <Container>
      {cartItems && (
        <>
          <ItemsList cart={cartItems} />
          <SumInfo cart={cartItems} />
          <Button title="Seguir para o pagamento" navigation="/payment" />
        </>
      )}
    </Container>
  );
}
