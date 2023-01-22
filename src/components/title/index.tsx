import React, { ReactNode } from 'react';
import * as S from './styles'

interface TitleProps {
  children: ReactNode; 
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <S.Title>{children}</S.Title>
  );
};
export default Title;