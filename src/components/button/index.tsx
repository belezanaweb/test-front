import React, {ButtonHTMLAttributes} from 'react';
import * as S from './styles'
const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, disabled, onClick, type }) => {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
        { children }
    </S.Button>
  );
};
export default Button;