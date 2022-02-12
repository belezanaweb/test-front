import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { IconBaseProps } from 'react-icons/lib';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
  navigation?: string;
}

export default function Button({ type, title, width, navigation }: ButtonProps) {
  const navigate = useNavigate();

  function handleNavigation() {
    if (navigation) navigate(navigation, { replace: true });
  }

  return (
    <ButtonStyle type={type} width={width} onClick={() => handleNavigation()}>
      <span>{title}</span>
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