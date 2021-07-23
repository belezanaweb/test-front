import React from 'react'

import SuccessIcon from '../../assets/images/success-icon.png'
import { ContainerSuccessMessage } from './styles'

function SuccessMessage() {
  return (
    <ContainerSuccessMessage>
      <img src={SuccessIcon} alt="Sucesso" />
      <p>COMPRA EFETUADA COM SUCESSO</p>
    </ContainerSuccessMessage>
  )
}

export default SuccessMessage
