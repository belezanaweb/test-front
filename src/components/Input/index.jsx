import React from 'react';
import PropTypes from 'prop-types';

import InputMask from 'react-input-mask';
import InputStyled from './style';
import Text from '../Text';

const Input = props => (
  <InputStyled>
    {props.label ? <label>{props.label}</label> : null}
    <InputMask
      data-cy={props.dataCy && props.dataCy}
      type={props.type ? props.type : 'text'}
      placeholder={props.placeholder ? props.placeholder : null}
      name={props.name ? props.name : null}
      onChange={props.onChange ? props.onChange : undefined}
      defaultValue={props.defaultValue ? props.defaultValue : ''}
      mask={props.mask ? props.mask : null}
      maskChar={props.maskChar ? props.maskChar : null}
      disabled={!!props.disabled}
      style={props.style && props.style}
    />
    {props.error ? (
      <Text color="red" size="10px">
        {props.error}
      </Text>
    ) : null}
  </InputStyled>
);

Text.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
