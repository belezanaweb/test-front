import * as React from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <Section title="Produtos">
          <CartProducts items={cart!.items} />
        </Section>
        <CartResume cart={cart} />
        <Button as={Link} to="/checkout/payment">Seguir para o pagamento</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

export default connect(
  mapStateToProps
)(CheckoutCart);
