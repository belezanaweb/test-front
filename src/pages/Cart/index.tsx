import React, { createElement } from 'react'
import { PageWrapper } from './styles'

import NavBar from '../../components/NavBar'
import { cartProducts, useCartProducts } from '../../queries/cartQueries'
import Bag from './screens/Bag'
import Payment from './screens/Payment'
import Confirmation from './screens/Confirmation'
import useNavigateStore from '../../store/useNavigateStore'

const Cart = () => {
  const { data, isLoading, error } = useCartProducts()
  const screenOrder = { Sacola: Bag, Pagamento: Payment, Confirmação: Confirmation }
  const currentScreen = useNavigateStore((state) => state.screen)

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>ocorreu um erro</div>
  }

  const renderScreen = (data: cartProducts) => {
    if (currentScreen === 'Sacola') {
      return createElement(screenOrder[currentScreen], { ...data })
    }
    return createElement(screenOrder[currentScreen])
  }

  return (
    <PageWrapper>
      <NavBar />
      {data && renderScreen(data)}
    </PageWrapper>
  )
}

export default Cart
