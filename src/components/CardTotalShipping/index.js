/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card, Type, Price, Line,
} from './style';

const CardTotalShipping = (props) => {
  const { cart } = props;

  const fields = [
    {
      name: 'PRODUTOS',
      value: cart.subTotal,
    },
    {
      name: 'FRETE',
      value: cart.shippingTotal,
    },
    {
      name: 'DESCONTO',
      value: cart.discount,
      isDiscount: true,
    },
    {
      name: 'TOTAL',
      value: cart.total,
      isTotal: true,
    },
  ];

  return (
    <Card>
      {fields && fields.map((field) => (
        <Line isDiscount={field.isDiscount} isTotal={field.isTotal} key={field}>
          <Type>
            {field.name}
          </Type>
          <Price>
            {field.isDiscount ? '- ' : null}
            R$
            {' '}
            {field.value && field.value.toFixed(2)}
          </Price>
        </Line>
      ))}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

CardTotalShipping.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(CardTotalShipping);
