import React, { useEffect, useContext } from 'react'
import { ReducerContext } from '../../reducer'
import './ShoppingCart.css'
import { NavBar } from '../../components/NavBar'
import { Product } from '../../components/Product'
import { Summary } from '../../components/Summary'
import { Button } from '../../components/Button'
import { fetch } from '../../service'

const ShoppingCart = (props) => {
  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch()
      dispatch({ type: 'SET_SHOPPING_CART', payload: response })
    }
    fetchData()
  }, [dispatch])

  const submit = () => {
    props.history.push('/payment')
  }

  return (
    <>
      <NavBar pathname={props.location.pathname} />
      <div className="page-container">
        <div className="title">
          <span>PRODUTOS</span>
        </div>
        <div className="responsive-container">
          <div className="product-list">
            {state.shoppingCart.items.map((i) => {
              return <Product key={i.product.sku} product={i.product} showPrice={true} />
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
            <Button label="SEGUIR PARA O PAGAMENTO" onClick={submit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
