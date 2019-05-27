import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getCart } from '../../actions';
import { Switch, Route, Redirect } from 'react-router';

import { CartType } from '../../models/cart.model';

import StepHeader from '../../components/step-header';
import CheckoutCart from './checkout-cart';
import CheckoutPayment from './checkout-payment';
import CheckoutConfirmation from './checkout-confirmation';
import Grid from '../../components/grid';
import { stepsTypes } from '../../actions/constants';

class CheckoutContainer extends React.Component<{ history: any, cart: CartType, getCart: () => any }, {}> {

  steps = ['cart', 'payment', 'confirmation'].reduce((curr: any[], path: string) =>
    curr.concat({ label: stepsTypes[path], path }), []);

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const { history } = this.props;
    const step_active = history.location.pathname.replace('/checkout/', '');

    return (
      <React.Fragment>
        <Helmet>
          <title>Checkout</title>
          <meta name="description" content="Checkout page in steps" />
        </Helmet>
        <StepHeader steps={this.steps} stepActive={step_active} />
        <Grid>
          <Switch>
            <Route path="/checkout/cart" component={CheckoutCart} />
            <Route path="/checkout/payment" component={CheckoutPayment} />
            <Route path="/checkout/confirmation" component={CheckoutConfirmation} />
            <Redirect from="*" to={'/checkout/cart'} />
          </Switch>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart });

const mapDispatchToProps = (dispatch: any) =>
  ({ getCart: () => dispatch(getCart()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
