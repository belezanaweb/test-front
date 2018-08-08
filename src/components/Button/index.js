import React from 'react';

/**
 * Styles
 */
import { Btn } from './styles';

const Button = props => (
  <Btn>
    {props.children}
  </Btn>
);

export default Button;
