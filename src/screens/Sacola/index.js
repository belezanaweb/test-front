import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//API
import Checkout from '../../api/checkout'

// components
import Title from '../../components/Title'
import ProductList from '../../components/ProductList'
import PricesList from '../../components/PricesList'

const checkout = new Checkout()

const Sacola = () => {

  const [checkoutState, setcheckoutState] = useState('')

  useEffect( () => {

    async function getData() {
      const checkoutData = await checkout.get('5b15c4923100004a006f3c07')
      console.log(checkoutData)
      setcheckoutState(checkoutData.data)
    }

    getData()

  }, [])

  return (

    <div className="container">

      <div className="container__content">

        <Title title="Produtos" />

        <ProductList items={ checkoutState.items }/>

        { checkoutState && <PricesList items={ checkoutState } /> }

        <Link
          className="botao"
          onClick={ ()=> {
            window.localStorage.removeItem('id')
            window.localStorage.setItem('id', checkoutState.id)
          } }
          to={{ pathname: '/pagamento' }}
        >
          seguir para o pagamento
        </Link>

      </div>

    </div>

  )
}

export default Sacola
