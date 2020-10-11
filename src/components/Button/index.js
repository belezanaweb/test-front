import React from 'react';
import PropTypes from 'prop-types';
import { NameButton, ButtonCustom } from './style';

const Button = (props) => {
  const { isSubmit, onClick, name } = props;

  return (
    <ButtonCustom type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
      <NameButton>
        {name}
      </NameButton>
    </ButtonCustom>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSubmit: PropTypes.bool,
};

Button.defaultProps = {
  isSubmit: false,
};

export default Button;
