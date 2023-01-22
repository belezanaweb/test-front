import React from 'react';
import * as S from './styles'

const Loading: React.FC = () => {
    return (
      <S.Wrapper>
        <S.LdsRing className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </S.LdsRing>
      </S.Wrapper>
    );
}

export default Loading;
