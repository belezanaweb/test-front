import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

import Panel from '../../components/ui/panel';
import Title from '../../components/ui/title';
import Card from '../../components/ui/card';
import CartSummary from '../../components/ui/cart-summary';
import PaymentSummary from '../../components/app/payment-summary';

function Success() {
  const { data, loading } = useSelector((state: AppState) => state.success);

  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
      <div>
        <PaymentSummary creditCardNumber="****.****.****.1234" name="José da Silva" expires="05/2019" />
        <br />
        <br />
        <Panel title={<Title>Produtos</Title>}>
          <>
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              presentation={true}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              presentation={true}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
            <Card
              title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              presentation={true}
              image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
          </>
        </Panel>
        <br />
        <br />
        <CartSummary subTotal={624.8} shippingTotal={5.3} discount={30} total={618.9} />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  );
}

Success.preload = async ({ store, match }: { store: any; match: any }) => {
  const success = store.getState().success;
  const successId = match.params.id;
  //const needFetch = !success.data || success.data.id !== Number(successId);
  //if (needFetch && !success.loading) {
  //store.dispatch(actions.loadSuccessRequest(successId));
  //}
};

export default Success;
