import React, { useRef, useEffect, useState, useCallback, ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';
import PropTypes from 'prop-types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
}

export default function Button({ type, title, width }: ButtonProps) {
  return (
    <ButtonStyle type={type} width={width}>
      {title}
    </ButtonStyle>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string
};

Button.defaultProps = {
  width: '100%'
};
