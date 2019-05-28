import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import Button from '../../../components/button';
import CartProducts from '../../../components/cart-products';
import CartResume from '../../../components/cart-resume';
import Section from '../../../components/section';

import { CartType } from '../../../models/cart.model';

class CheckoutCart extends React.Component<{ cart: CartType }, {}> {

  render() {
    const { cart } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Cart | Checkout</title>
          <meta name="description" content="Cart step" />
        </Helmet>
        <div>
          <Section title="Produtos">
            <CartProducts items={cart!.items} showPrice />
          </Section>
          <CartResume cart={cart} />
          <Button as={Link} to="/checkout/payment">Seguir para o pagamento</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

export default connect(
  mapStateToProps
)(CheckoutCart);
