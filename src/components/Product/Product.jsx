import React from 'react'
import { formatToBRL } from '../../utils/currencyHelper'
import * as CSS from './style'

export default function Product({ hidePrice, item }) {
  const { name } = item.product
  const { price } = item.product.priceSpecification
  const { thumbnail, extraLarge } = item.product.imageObjects[0]

  return (
    <>
      <a href={extraLarge} target="_blank" rel="noopener noreferrer">
        <CSS.Img src={thumbnail} alt={name} />
      </a>
      <CSS.Desc>
        <CSS.Label title={name}>{name}</CSS.Label>
        {hidePrice ?? <CSS.Price>{formatToBRL(price)}</CSS.Price>}
      </CSS.Desc>
    </>
  )
}
