import React from 'react';
import classes from './Item.module.scss';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { CURRENCY_PROPS } from '../../../Constants';

const Item = (props) => {

  return (
    <div className={classes.Item}>

      <div className={classes.Col}>
        <div className={classes.Image}>
          <img src={props.smallImage} />
        </div>
      </div>

      <div className={classes.Col}>
        <div className={classes.Content}>
          <p>{props.name}</p>
          <p>
            <CurrencyFormat value={props.price} {...CURRENCY_PROPS}/>
          </p>
        </div>
      </div>

    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Item;