import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardForm } from './components/cardForm';
import { Title } from '../../commons/title';
import { PriceSummary } from '../../commons/priceSummary';
import { Button } from '../../commons/button';
import { connect } from 'react-redux';
import './paymentContainer.css';
import { orderActions } from '../../store/actions/order';

const Component = ({ products, card, dispatch }) => {
  const history = useHistory();

  const handleClick = (isValid) => {
    if (isValid) {
      dispatch(orderActions.complete({ isOrderComplete: true }));
      history.push('/success');
    }
  };

  return (
    <div data-testid="payment" className="payment">
      <Title text="CARTÃO DE CRÉDITO" />
      <CardForm />
      <PriceSummary
        subTotal={products.subTotal}
        shippingTotal={products.shippingTotal}
        discount={products.discount}
        total={products.total}
      />
      <Button onClick={() => handleClick(card.isValid)} text="FINALIZAR PEDIDO" />
    </div>
  );
};

const PaymentContainer = connect((state) => ({ products: state.products, card: state.card }))(
  Component
);

export { PaymentContainer };
