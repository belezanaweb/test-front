import React, { useContext } from 'react'
import { ReducerContext } from '../../reducer'
import './Checkout.css'
import { NavBar } from '../../components/NavBar'
import { Product } from '../../components/Product'
import { Summary } from '../../components/Summary'

const Checkout = (props) => {
  const { state } = useContext(ReducerContext)

  return (
    <>
      <NavBar pathname={props.location.pathname} />
      <div className="page-container">
        <div className="success">
          <img></img>
          <span>COMPRA EFETUADA COM SUCESSO</span>
        </div>
        <div className="title">
          <span>PAGAMENTO</span>
        </div>
        <div className="card payment-card">
          <span>{state.creditCard.number}</span>
          <span>{state.creditCard.name}</span>
          <span>{state.creditCard.expiration}</span>
        </div>
        <div className="title">
          <span>PRODUTOS</span>
        </div>
        <div className="card product-card">
          {state.shoppingCart.items.map((i) => {
            return <Product key={i.product.sku} product={i.product} showPrice={false} />
          })}
        </div>
        <div className="summary">
          <Summary
            summary={{
              subTotal: state.shoppingCart.subTotal,
              shipping: state.shoppingCart.shippingTotal,
              discount: state.shoppingCart.discount,
              total: state.shoppingCart.total
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Checkout
