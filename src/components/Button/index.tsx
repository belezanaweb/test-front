import React, { ButtonHTMLAttributes, useState } from 'react';
import { ButtonStyle } from './styles';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
  navigation?: string;
  typeButton?: string;
}

export default function Button({ type, title, width, navigation, typeButton }: ButtonProps) {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  function handleNavigation() {
    if (navigation) {
      if (typeButton === 'payment') {
        setIsActive(true);

        setTimeout(() => {
          navigate(navigation, { replace: true });
          setIsActive(false);
        }, 5000);
      }
      //
      else {
        navigate(navigation, { replace: true });
      }
    }
  }

  return (
    <ButtonStyle
      type={type}
      width={width}
      onClick={() => handleNavigation()}
      className={isActive ? 'progress-btn active' : 'progress-btn'}
      data-progress-style="fill-back"
    >
      <span className="btn">{title}</span>
      <div className="progress"></div>
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
