import React, { useEffect } from 'react';
import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';
import PaymentMethod from '../../../../components/PaymentMethod';

import { Container, CheckConfirm, Content } from './styles';

import Check from '../../../../assets/check.png';
import { useCart } from '../../../../hooks/useCart';
import { getFromLocalStorage } from '../../../../helpers/local-storage';
import { BELEZA_NA_WEB_CREDIT_CARD } from '../../../../constants/local-storage';

export default function Confirmation() {
  const { cartItems, sumInfo, creditCardInfo, setCreditCardInfo } = useCart();

  useEffect(() => {
    const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);
    setCreditCardInfo(creditCardFromStorage);
  }, []);

  return (
    <Container>
      <CheckConfirm>
        <div className="check">
          <img src={Check} alt="check" />
        </div>
        <span>Compra efetuada com Sucesso</span>
      </CheckConfirm>

      <Content>
        {creditCardInfo && <PaymentMethod creditCardInfo={creditCardInfo} />}
        {cartItems && <ItemsList cartItems={cartItems} showControlers={false} />}
        {sumInfo && <SumInfo sumInfo={sumInfo} />}
      </Content>
    </Container>
  );
}
