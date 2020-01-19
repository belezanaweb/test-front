import React from 'react';
import PropTypes from 'prop-types';

import TextStyled from './style';

const Text = props => (
  <TextStyled
    data-cy={props.dataCy && props.dataCy}
    size={props.size && props.size}
    bold={props.bold && props.bold}
    color={props.color && props.color}
    center={props.center && props.center}
    uppercase={props.uppercase && props.uppercase}
    className={props.className && props.className}
  >
    {props.children && props.children}
  </TextStyled>
);

Text.propTypes = {
  size: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  center: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default Text;
