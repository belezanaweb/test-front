import React, { useEffect, useState } from 'react'
import Items from '../../components/Items'

import { getCheckout } from '../../services/checkout'

function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCheckout().then((response) => {
      setProducts(response.items)
    })
  }, [])

  return (
    <div>
      <p>Produtos</p>
      {products &&
        products.map((item) => (
          <Items
            name={item.product.name}
            image={item.product.imageObjects[0].small}
            price={item.product.priceSpecification.price}
          />
        ))}
    </div>
  )
}

export default Cart
