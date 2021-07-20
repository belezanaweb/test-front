import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './navbarContainer/navbarContainer';
import { CartContainer } from './cartContainer/cartContainer';
import { PaymentContainer } from './paymentContainer/paymentContainer';
import { SuccessContainer } from './successContainer/successContainer';
import { Loading } from '../commons/loading';
import { connect } from 'react-redux';
import { productsThunks } from '../thunks/products';
import './checkout.css';

const Component = ({ isLoading, order, dispatch }) => {
  useEffect(() => {
    dispatch(productsThunks.getAll());
  });

  return (
    <div className="checkout" data-testid="checkout">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {order.isOrderComplete ? <Redirect to="/success" /> : <CartContainer />}
            </Route>
            <Route path="/payment">
              {order.isOrderComplete ? <Redirect to="/success" /> : <PaymentContainer />}
            </Route>
            <Route path="/success">
              {order.isOrderComplete ? <SuccessContainer /> : <Redirect to="/payment" />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

const Checkout = connect((state) => ({ isLoading: state.products.isLoading, order: state.order }))(
  Component
);

export { Checkout };
