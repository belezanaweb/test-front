import React from 'react';
import style from './style.module.scss'

type Props = {
  children: React.ReactChild,
  handleClick: Function | any,
  allow?: boolean
};

const Button: React.FC<Props> = ({ children, handleClick, allow = true }) => {
  return (
    <button className={`${style.button} ${!allow && style.isDisabled}`} onClick={handleClick} disabled={!allow}>
      {children}
    </button>
  );
}

export default Button;