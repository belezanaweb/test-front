import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import CartFeedback from '../../../components/cart-feedback';
import CartProducts from '../../../components/cart-products';
import CartResume from '../../../components/cart-resume';
import Section from '../../../components/section';

import { CartType } from '../../../models/cart.model';
import { History } from 'history';

class CheckoutConfirmation extends React.Component<{ cart: CartType, history: History }, {}> {

  componentDidMount() {

    if (!this.props.cart.methodPayment || this.props.cart.methodPayment === {}) {
      this.props.history.push('/checkout');
    }
  }

  render() {
    const { cart } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Confirmation | Checkout</title>
          <meta name="description" content="Confirmation step" />
        </Helmet>
        <div>
          <CartFeedback message="Compra efetuada com sucesso" />
          <Section title="Pagamento">
            <span>{cart!.methodPayment && cart!.methodPayment!.numberCard}</span>
            <br />
            <span>{cart!.methodPayment && cart!.methodPayment!.titularNameCard}</span>
            <br />
            <span>{cart!.methodPayment && cart!.methodPayment!.validateCard}</span>
          </Section>
          <Section title="Produtos">
            <CartProducts items={cart.items} />
          </Section>
          <CartResume cart={cart} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

export default connect(
  mapStateToProps
)(CheckoutConfirmation);
