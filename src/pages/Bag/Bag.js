import React, { useContext, useEffect } from 'react'
import { ReducerContext } from '../../utils/Reducer'
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product/Product'
import Button from '../../components/Button/Button'

import { useHistory } from 'react-router-dom'
import { mock } from '../../api'

const Bag = () => {
  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    const mockData = async () => {
      const response = await mock()
      dispatch({ type: 'SET_SHOPPING_CART', payload: response })
    }
    mockData()
  }, [dispatch])

  const history = useHistory()

  return (
    <>
      <NavBar active="/" />

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

          <Button
            onClick={() => {
              history.push('/payment')
            }}
            label="SEGUIR PARA O PAGAMENTO"
          />
        </div>
      </div>
    </>
  )
}

export default Bag
