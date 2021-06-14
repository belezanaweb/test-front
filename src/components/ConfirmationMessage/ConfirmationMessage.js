import React from 'react'

import { ReactComponent as CheckIcon } from './check-icon.svg'
import * as S from './styles'

const ConfirmationMessage = () => (
  <S.ConfirmationMessage>
    <S.CheckIconWrapper>
      <CheckIcon />
    </S.CheckIconWrapper>
    <S.Text>COMPRA EFETUADA COM SUCESSO</S.Text>
  </S.ConfirmationMessage>
)

export default ConfirmationMessage
