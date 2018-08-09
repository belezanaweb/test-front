import React from 'react';

/**
 * Styles
 */
import { Btn } from './styles';

const Button = props => (
  <Btn to={props.to} className={props.disable && 'disable'}>
    {props.children}
  </Btn>
);

export default Button;
