import * as React from 'react';
import { connect } from 'react-redux';

import CartProducts from '../../../components/cart-products';
import CartResume from '../../../components/cart-resume';
import Section from '../../../components/section';

import { CartType } from '../../../models/cart.model';

class CheckoutConfirmation extends React.Component<{ cart: CartType }, {}> {

  render() {
    const { cart } = this.props;

    return (
      <div>
        <div>Compra efetuada com sucesso</div>
        <Section title="Pagamento">
          <span>{cart!.methodPayment!.creditCardNumber}</span>
          <span>{cart!.methodPayment!.titularNameCard}</span>
          <span>{cart!.methodPayment!.validateCard}</span>
        </Section>
        <Section title="Produtos">
          <CartProducts items={cart.items} />
        </Section>
        <CartResume cart={cart} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

export default connect(
  mapStateToProps
)(CheckoutConfirmation);
