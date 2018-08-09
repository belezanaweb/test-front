import React from 'react';

/**
 * Libs
 */
import 'font-awesome/css/font-awesome.min.css';

/**
 * Styles
 */
import { Success } from './styles';

const SuccessTitle = (props) => (
  <Success>
    <i className="fa fa-check-circle" />
    <h3>{props.children}</h3>
  </Success>
);

export default SuccessTitle;
