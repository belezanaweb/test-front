import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

const SuccessMessage: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <S.CheckIcon icon={faCheck} /> 
      </S.ContainerIcon>
      <S.Message>COMPRA EFETUADA COM SUCESSO</S.Message>
    </S.Container>
  )
};

export default SuccessMessage;