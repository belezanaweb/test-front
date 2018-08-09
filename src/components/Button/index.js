import React from 'react';

/**
 * Styles
 */
import { Btn } from './styles';

const Button = props => (
  <Btn to={props.to}>
    {props.children}
  </Btn>
);

export default Button;
