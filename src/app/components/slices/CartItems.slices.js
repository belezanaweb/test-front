import React from 'react'
import { ContainerProducts } from '../../pages/cart/CartPage.style'
import handleMoneyRealFormat from '../../../utils/helpers/formatMoney'

const SliceCartItems = (props) => {
  const { transaction } = props
  return (
    <ContainerProducts>
      <ul>
        {transaction.items.map((list) => {
          return (
            <li key={list.product.sku}>
              <img src={list.product.imageObjects[0].thumbnail} alt={list.product.name} />
              <p>{list.product.name}</p>
              <strong>{handleMoneyRealFormat(list.product.priceSpecification.price)}</strong>
            </li>
          )
        })}
      </ul>
    </ContainerProducts>
  )
}

export default SliceCartItems
