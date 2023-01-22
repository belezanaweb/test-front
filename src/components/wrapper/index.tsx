import React, {BaseHTMLAttributes} from 'react';
import * as S from './styles'

const Wrapper: React.FC<BaseHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <S.Wrapper>
        { children }
    </S.Wrapper>
  );
};

export default Wrapper;