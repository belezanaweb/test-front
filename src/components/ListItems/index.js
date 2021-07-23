import React from 'react'
import Items from '../Items'
import { ContainerListItems } from './styles'

function ListItems({ list }) {
  return (
    <ContainerListItems>
      {list &&
        list.map((item) => (
          <Items
            name={item.product.name}
            image={item.product.imageObjects[0].small}
            price={item.product.priceSpecification.price}
          />
        ))}
    </ContainerListItems>
  )
}

export default ListItems
