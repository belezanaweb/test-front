import React from 'react';
import { useSelector } from 'react-redux';

import Cardboard from '../Cardboard';
import Title from '../Title';

const PaymentDataContainer = () => {
  const { card_number, card_holder_name, card_expiration_date } = useSelector(
    (state) => state.checkout
  );

  return (
    <>
      <Title>Pagamento</Title>
      <Cardboard>
        {card_number} <br />
        {card_holder_name} <br />
        {card_expiration_date}
      </Cardboard>
    </>
  );
};

export default PaymentDataContainer;
