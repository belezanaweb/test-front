import React from 'react'
import { ContainerInformations } from './styles'

function Informations() {
  return (
    <ContainerInformations>
      <p>Produtos</p>
      <p>Frete</p>
      <p className="discount">Desconto</p>
      <p className="total">Total</p>
    </ContainerInformations>
  )
}

export default Informations
