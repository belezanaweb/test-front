import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Informations from '../../components/Informations'
import ListItems from '../../components/ListItems'

import { getCheckout } from '../../services/checkout'

function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCheckout().then((response) => {
      setProducts(response.items)
    })
  }, [])

  return (
    <main>
      <h5>Produtos</h5>
      <ListItems list={products} />
      <Informations />
      <Button>Seguir para pagamento</Button>
    </main>
  )
}

export default Cart
