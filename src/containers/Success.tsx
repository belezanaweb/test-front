import * as React from 'react';
import { Connection, Inject } from 'exredux';
import { modelStore } from '../service/modelStore';
import { ProductListModel } from '../service/models/ProductListModel';
import { Title } from '../components/Title';
import { CartSummary } from '../components/CartSummary';
import { CardModel } from '../service/models/CardModel';
import { CartProducts } from '../components/CartProducts';
import { Card } from '../components/Card';
import { Wrapper } from '../components/Wrapper';
import { SuccessBadge } from '../components/SuccessBadge';
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
class Props {
  @Inject productList?: ProductListModel;
  @Inject cardModel?: CardModel;
}

@Connection({
  modelStore,
  props: Props
})
export class Success extends React.Component<Props> {
  render() {
    const { productList, cardModel } = this.props;
    const products = productList.response.data;
    return (
      <Wrapper>
        <SuccessBadge />
        <Title>PAGAMENTO</Title>
        <Card>
          <div>
            {this.maskCreditCardNumber(cardModel.creditCard.creditCardNumber)}
          </div>
          <div>{cardModel.creditCard.creditCardName}</div>
          <div>{cardModel.creditCard.creditCardExpiryDate}</div>
        </Card>
        <Title>PRODUTOS</Title>
        <CartProducts items={products.items} hidePrice={true} />

        <CartSummary
          discount={products.discount}
          shippingTotal={products.shippingTotal}
          subTotal={products.subTotal}
          total={products.total}
        />
      </Wrapper>
    );
  }

  maskCreditCardNumber = (value: string) => {
    const last4Digits = value.slice(-4);
    return last4Digits.padStart(value.length, '*');
  }
}
