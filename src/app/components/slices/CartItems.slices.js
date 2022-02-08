import React from 'react'
import { ContainerProducts } from '../../pages/cart/CartPage.style'

const SliceCartItems = (props) => {
  return (
    <ContainerProducts>
      <ul>
        {props.transaction.items.map((list) => {
          return (
            <li key={list.product.sku}>
              <img src={list.product.imageObjects[0].thumbnail} alt={list.product.name} />
              <p>{list.product.name}</p>
              <strong>R$ {list.product.priceSpecification.price}</strong>
            </li>
          )
        })}
      </ul>
    </ContainerProducts>
  )
}

export default SliceCartItems
