import React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Card, CreditCardFormController, CreditCardForm, Heading, Layout, Total } from '../components';
import { useCart, useCreditCard } from '../enhancers';

const Payment: React.FC = () => {
  const router = useHistory();
  const { data } = useCart();
  const { save } = useCreditCard();

  const handleSubmit = useCallback((payload: any) => {
    save(payload);
    router.push('/success');
  }, [router, save]);

  return (
    <Layout>
      <CreditCardFormController onSubmit={handleSubmit}>
        {() => (
          <>
            <Heading>Cartão de Crédito</Heading>
            <Card>
              <CreditCardForm />
            </Card>
            <Total data={data} />
            <Button fluid type="submit">Finalizar o Pedido</Button>
          </>
        )}
      </CreditCardFormController>
    </Layout>
  )
}

export default Payment;
