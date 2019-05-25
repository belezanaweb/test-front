import React from 'react';
import classes from './Total.module.scss';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { CURRENCY_PROPS } from '../../Constants';

const Total = (props) => {

  return (
    <div className={classes.Total}>
      <table>
        <tbody>
          <tr>
            <td>Produtos</td>
            <td><CurrencyFormat value={props.subTotal} {...CURRENCY_PROPS}/></td>
          </tr>
          <tr>
            <td>Frete</td>
            <td><CurrencyFormat value={props.shippingTotal} {...CURRENCY_PROPS}/>
            </td>
          </tr>
          <tr className={classes.Orange}>
            <td>Desconto</td>
            <td>
              <CurrencyFormat value={props.discount} {...CURRENCY_PROPS} />
            </td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td>
              <strong>
                <CurrencyFormat value={props.total}{...CURRENCY_PROPS} />
              </strong>
            </td>
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