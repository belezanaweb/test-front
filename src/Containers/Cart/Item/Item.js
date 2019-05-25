import React from 'react';
import classes from './Item.module.scss';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <div className={classes.Item}>
      
      <div className={classes.Image}>
        <img src={props.smallImage}/>
      </div>

      <div className={classes.Content}>
        <p>{props.name}</p>
        <p>{props.price}</p>
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