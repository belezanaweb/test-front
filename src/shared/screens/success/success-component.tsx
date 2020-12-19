import * as React from 'react';

import Panel from '../../components/ui/panel';
import Title from '../../components/ui/title';
import Card from '../../components/ui/card';
import CartSummary from '../../components/app/cart-summary';
import PaymentSummary from '../../components/app/payment-summary';
import VerticalSpacing from '../../components/ui/vertical-spacing';

import utils from '../../utils';

function Success() {
  return (
    <div>
      <VerticalSpacing bottom="medium">
        <PaymentSummary
          creditCardNumber={utils.replace.numbers('1234.1234.1234.1234', 0, 14, '*')}
          name="José da Silva"
          expires="05/2019"
        />
      </VerticalSpacing>

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
      <VerticalSpacing top="medium" bottom="large">
        <CartSummary
          subTotal={utils.format.currency.toBRL(624.8)}
          shippingTotal={utils.format.currency.toBRL(5.3)}
          discount={utils.format.currency.toBRL(30)}
          total={utils.format.currency.toBRL(618.9)}
        />
      </VerticalSpacing>
    </div>
  );
}

export default Success;
