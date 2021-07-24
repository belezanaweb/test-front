import React from 'react'
import { formatValue } from '../../helpers/functions'
import { ContainerInformations, WrapperItem } from './styles'

function Informations({ discount, shipping, subtotal }) {
  const getTotal = () => {
    return subtotal + shipping - discount
  }

  return (
    <ContainerInformations>
      <WrapperItem>
        <p>Produtos</p>
        <p>{formatValue(subtotal)}</p>
      </WrapperItem>
      <WrapperItem>
        <p>Frete</p>
        <p>{formatValue(shipping)}</p>
      </WrapperItem>
      <WrapperItem>
        <p className="discount">Desconto</p>
        <p className="discount">
          {discount > 0 ? `- ${formatValue(discount)}` : formatValue(discount)}
        </p>
      </WrapperItem>
      <WrapperItem>
        <p className="total">Total</p>
        <p className="total">{formatValue(getTotal())}</p>
      </WrapperItem>
    </ContainerInformations>
  )
}

export default Informations
