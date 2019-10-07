import * as React from 'react';
import { Connection, Inject } from 'exredux';
import { modelStore } from '../service/modelStore';
import { ProductListModel } from '../service/models/ProductListModel';
import { Title } from '../components/Title';
import { CartSummary } from '../components/CartSummary';
import { Button } from '../components/Button';
import { CreditCardForm } from './CreditCardForm';
import { CardModel } from '../service/models/CardModel';
import { Wrapper } from '../components/Wrapper';
import { Link } from 'react-router-dom';
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
export class Payment extends React.Component<Props> {
  render() {
    const { productList, cardModel } = this.props;
    const products = productList.response.data;
    return (
      <Wrapper>
        <Title>CARTÃO DE CRÉDITO</Title>
        <CreditCardForm />
        <CartSummary
          discount={products.discount}
          shippingTotal={products.shippingTotal}
          subTotal={products.subTotal}
          total={products.total}
        />

        <Link to="success">
          <Button disabled={!cardModel.isValidAll()}>Finalizar o Pedido</Button>
        </Link>
      </Wrapper>
    );
  }
}
