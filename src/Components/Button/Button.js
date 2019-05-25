import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={classes.Button}
    onClick={props.action}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
}




export default Button;