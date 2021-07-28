import React, { useContext, useEffect } from 'react'
import { ReducerContext } from '../../utils/Reducer'
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product/Product'
import Summary from '../../components/Summary/Summary'
import { PageContainer, Title, ListProductContainer } from './styles'
import { mock } from '../../api'

const Checkout = () => {
  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    const mockData = async () => {
      const response = await mock()
      dispatch({ type: 'SET_SHOPPING_CART', payload: response })
    }
    mockData()
  }, [dispatch])
  return (
    <>
      <NavBar active="checkout" />

      <PageContainer>
        <Title>PRODUTOS</Title>
        <ListProductContainer>
          {state.shoppingCart.items.map((i) => {
            return <Product key={i.product.sku} product={i.product} showPrice={true} />
          })}
        </ListProductContainer>

        <Summary
          summary={{
            subTotal: state.shoppingCart.subTotal,
            shipping: state.shoppingCart.shippingTotal,
            discount: state.shoppingCart.discount,
            total: state.shoppingCart.total
          }}
        />
      </PageContainer>
    </>
  )
}

export default Checkout
