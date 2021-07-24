import React from 'react'
import Items from '../Items'
import { ContainerListItems } from './styles'

function ListItems({ list, showPrice = true }) {
  return (
    <ContainerListItems>
      {list &&
        list.map((item) => (
          <Items
            key={item.product.sku}
            name={item.product.name}
            image={item.product.imageObjects[0].small}
            price={item.product.priceSpecification.price}
            showPrice={showPrice}
          />
        ))}
    </ContainerListItems>
  )
}

export default ListItems
