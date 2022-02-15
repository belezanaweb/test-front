import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';
import PaymentMethod from '../../components/PaymentInfo';
import EmptyMessage from '../../components/EmptyMessage';

import { Container, CheckConfirm, Content } from './styles';

import Check from '../../assets/check.png';
import { useCart } from '../../hooks/useCart';
import { cleanLocalStorage, getFromLocalStorage } from '../../helpers/local-storage';
import { BELEZA_NA_WEB_CREDIT_CARD } from '../../constants/local-storage';
import { useToast } from '../../hooks/useToast';

export default function CartConfirmation() {
  const { cartItems, creditCardInfo, setIsPurchaseConfirm } = useCart();
  const navigate = useNavigate();
  const { addToast } = useToast();

  useEffect(() => {
    const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);

    if (creditCardFromStorage) {
      setIsPurchaseConfirm(true);

      addToast({
        type: 'success',
        title: 'Sucesso!',
        description: 'Aguarde para ser redirecionado a loja'
      });

      setTimeout(() => {
        cleanLocalStorage();
        navigate('/', { replace: true });
      }, 4000);
    } else {
      navigate('/', { replace: true });
    }
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
            {creditCardInfo?.number && <PaymentMethod creditCardInfo={creditCardInfo} />}
            <ItemsList showControlers={false} showPrice={false} />
            <SumInfo />
          </Content>
        </>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
