import React, { useEffect, useState } from 'react'

import './Confirmacao.scss'

// components
import Title from '../../components/Title'
import ProductList from '../../components/ProductList'
import PricesList from '../../components/PricesList'

// API
import Checkout from '../../api/checkout'

// images
import successIcon from '../../assets/images/icons/success-icon.svg'

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

        <div className="success">
          <img className="success__icon" src={ successIcon } alt="Sucesso" />
          <h1 className="success__title">compra efetuada com sucesso</h1>
        </div>

        <Title title="Pagamento" />

        <div className="card">

          <div className="card-information">
            <span className="card-information__text">
              { window.localStorage.getItem('cardNumber') }
            </span>
            <span className="card-information__text">
              { window.localStorage.getItem('name') }
            </span>
            <span className="card-information__text">
              { window.localStorage.getItem('date') }
            </span>
          </div>

        </div>

        <Title title="Produtos" />

        <ProductList items={ checkoutState.items }/>

        <PricesList items={ checkoutState } />

      </div>

    </div>

  )

}

export default Confirmacao
