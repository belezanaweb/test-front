import React, { useEffect, useState } from 'react'
import requestAPI from '../../utils/requestAPI'

import NavBar from '../../components/NavBar'
import ProductsList from '../../components/ProductsList'

import { Container } from './styles'

const Kart = () => {
  const [items, setItems] = useState([])
  const [generalData, setGeneralData] = useState({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  })

  useEffect(() => {
    requestAPI({ url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' }).then((resp) => {
      console.log(resp.data)
      setItems(resp.data.items)
      setGeneralData({
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
      </Container>
    </div>
  )
}

export default Kart
