import React from 'react';
import classes from './Total.module.scss';
import PropTypes from 'prop-types';

const Total = (props) => {
  return (
    <div className={classes.Total}>
      <table>
        <tbody>
          <tr>
            <td>Produtos</td>
            <td>R$ {props.subTotal}</td>
          </tr>
          <tr>
            <td>Frete</td>
            <td>R$ {props.shippingTotal}</td>
          </tr>
          <tr>
            <td>Desconto</td>
            <td>R$ {props.discount}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>R$ {props.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Total.propTypes = {
  discount: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  shippingTotal: PropTypes.number.isRequired,
}

export default Total;