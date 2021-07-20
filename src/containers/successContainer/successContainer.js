import React from 'react';
import './successContainer.css';
import { Title } from '../../commons/title';
import { CartList } from '../../commons/cartList';
import { PriceSummary } from '../../commons/priceSummary';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

const component = ({ products, card }) => {
  return (
    <div data-testid="success" className="success">
      <div className="imgTitle">
        <FontAwesomeIcon className="icon" icon={faCheckCircle} />
        <Title classname="titleText" text="COMPRA EFETUADA COM SUCESSO" />
      </div>
      {card.cardNum && card.cardName && card.cardExp && (
        <>
          <Title text="PAGAMENTO" />
          <div data-testid="payment-data" className="paymentData">
            <div data-testid="card-number-masked">
              {'****.****.****.' + card.cardNum.substring(card.cardNum.length - 4)}
            </div>
            <div data-testid="card-name">{card.cardName}</div>
            <div data-testid="card-exp-date">{card.cardExp}</div>
          </div>
        </>
      )}
      <Title text="PRODUTOS" />
      <CartList items={products.items} showPrice={false} />
      <PriceSummary
        subTotal={products.subTotal}
        shippingTotal={products.shippingTotal}
        discount={products.discount}
        total={products.total}
      />
    </div>
  );
};

const SuccessContainer = connect((state) => ({ products: state.products, card: state.card }))(
  component
);

export { SuccessContainer };
