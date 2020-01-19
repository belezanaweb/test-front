import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './style';

const Button = props => (
  <ButtonStyled
    fullWidth={props.fullWidth && props.fullWidth}
    type={props.type ? props.type : 'text'}
    onClick={props.onClick && props.onClick}
    center={props.center && props.center}
    disabled={props.disabled && props.disabled}
  >
    {props.children && props.children}
  </ButtonStyled>
);

Text.propTypes = {
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
