import React from 'react'

import './Items.css'

const Items = props => [
  <h1 key="title">Produtos</h1>,
  <dl key="list" className="items">
    {props.cart.items.map(item =>
      <div key={item.product.sku}>
        <dd className="image"><img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} /></dd>
        <dt>{item.product.name}</dt>
        {!props.confirmation && <dd className="price">{item.product.priceSpecification.price.toLocaleString('pt-BR', props.format)}</dd>}
      </div>
    )}
  </dl>
]
export default Items
