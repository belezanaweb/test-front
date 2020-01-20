import React, { useContext, useEffect } from 'react'
import { OrderContext } from '../context/OrderContext'
import { useHistory } from 'react-router-dom'
import OrderConfirmation from '../components/OrderConfirmation'
import { CartListComponent } from '../components/CartList'
import { CartSummaryComponent } from '../components/CartSummary'
import OrderDetails from '../components/OrderDetails'

const Order: React.FC = () => {
  const [order] = useContext(OrderContext)

  // @ts-ignore Object
  const { cart, details } = order || {}
  const history = useHistory()

  useEffect(() => {
    if (!order) history.push('/carrinho')
  }, [history, order])
  return (
    <>
      {order && (
        <main className="app-main">
          <OrderConfirmation />
          <h2 className="page-title">Pagamento</h2>
          <OrderDetails details={details} />
          <h2 className="page-title">Produtos</h2>
          <CartListComponent cart={cart} />
          <CartSummaryComponent cart={cart} />
        </main>
      )}
    </>
  )
}

export default Order
