import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';
import PaymentMethod from '../../components/CreditCardInfo';

import { Container, CheckConfirm, Content } from './styles';

import Check from '../../assets/check.png';
import { useCart } from '../../hooks/useCart';
import { getFromLocalStorage } from '../../helpers/local-storage';
import { BELEZA_NA_WEB_CREDIT_CARD } from '../../constants/local-storage';

export default function CartConfirmation() {
  const { cartItems, creditCardInfo, setCreditCardInfo } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);

    if (creditCardFromStorage) setCreditCardInfo(creditCardFromStorage);
    else navigate('/cart/payment', { replace: true });
  }, []);

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <CheckConfirm>
            <div className="check">
              <img src={Check} alt="check" />
            </div>
            <span>Compra efetuada com Sucesso</span>
          </CheckConfirm>

          <Content>
            {creditCardInfo?.cardNumber && <PaymentMethod creditCardInfo={creditCardInfo} />}
            <ItemsList showControlers={false} />
            <SumInfo />
          </Content>
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
