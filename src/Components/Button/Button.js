import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={classes.Button}
      disabled={props.isInvalid}
      onClick={props.action}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool
}




export default Button;