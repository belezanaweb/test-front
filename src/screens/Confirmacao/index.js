import React, { useEffect, useState } from 'react'

// components
import Title from '../../components/Title'
import ProductList from '../../components/ProductList'
import PricesList from '../../components/PricesList'

//API
import Checkout from '../../api/checkout'

const checkout = new Checkout()

const Confirmacao = () => {

  const [checkoutState, setCheckoutState] = useState('')

  useEffect( () => {
    async function getData() {
      const checkoutData = await checkout.get('5b15c4923100004a006f3c07')
      setCheckoutState(checkoutData.data)
    }
    getData()
  }, [])

  return (

    <div className="container">

      <div className="container__content">

        <Title title="Produtos" />

        <ProductList items={ checkoutState.items }/>

        <PricesList items={ checkoutState } />

      </div>

    </div>

  )

}

export default Confirmacao
