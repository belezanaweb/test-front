import React from 'react'
import { ContainerInformations, WrapperItem } from './styles'

function Informations({ discount, shipping, subtotal, total }) {
  return (
    <ContainerInformations>
      <WrapperItem>
        <p>Produtos</p>
        <p>{total}</p>
      </WrapperItem>
      <WrapperItem>
        <p>Frete</p>
        <p>{shipping}</p>
      </WrapperItem>
      <WrapperItem>
        <p className="discount">Desconto</p>
        <p className="discount">{discount}</p>
      </WrapperItem>
      <WrapperItem>
        <p className="total">Total</p>
        <p className="total">{subtotal}</p>
      </WrapperItem>
    </ContainerInformations>
  )
}

export default Informations
