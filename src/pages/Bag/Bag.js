import React, { useContext, useEffect } from 'react'
import { ReducerContext } from '../../utils/Reducer'
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product/Product'
import Summary from '../../components/Summary/Summary'
import Button from '../../components/Button/Button'
import { PageContainer, Title, ListProductContainer } from './styles'

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

      <PageContainer>
        <Title>PRODUTOS</Title>

        <div className="responsive-container">
          <ListProductContainer>
            {state.shoppingCart.items.map((i) => {
              return <Product key={i.product.sku} product={i.product} showPrice={true} />
            })}
          </ListProductContainer>
          <div className="summary">
            <Summary
              summary={{
                subTotal: state.shoppingCart.subTotal,
                shipping: state.shoppingCart.shippingTotal,
                discount: state.shoppingCart.discount,
                total: state.shoppingCart.total
              }}
            />

            <Button
              onClick={() => {
                history.push('/payment')
              }}
              label="SEGUIR PARA O PAGAMENTO"
            />
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default Bag
