import React, { useEffect, useState } from 'react'
import requestAPI from '../../utils/requestAPI'

import NavBar from '../../components/NavBar'
import ProductsList from '../../components/ProductsList'
import Total from '../../components/Total'

import { Container } from './styles'

const Cart = () => {
  const [items, setItems] = useState([])
  const [totalData, setTotalData] = useState({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  })

  useEffect(() => {
    requestAPI({ url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' }).then((resp) => {
      console.log(resp.data)
      setItems(resp.data.items)
      setTotalData({
        subTotal: resp.data.subTotal,
        shippingTotal: resp.data.shippingTotal,
        discount: resp.data.discount,
        total: resp.data.total
      })
    })
  }, [])

  return (
    <div>
      <NavBar actualStep={'sacola'} />
      <Container>
        <h1>produtos</h1>
        <ProductsList items={items} />
        <Total
          subTotal={totalData.subTotal}
          shipping={totalData.shippingTotal}
          discount={totalData.discount}
          total={totalData.total}
        />
      </Container>
    </div>
  )
}

export default Cart
