import React, { useEffect } from 'react'
import apiCart from '../../../core/api/api.cart'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import Button from '../../components/layout/Button'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Checkout = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction(data)
    })
  }, [setTransaction])

  return (
    <>
      <TitleSection title="Pagamento" />
      <SliceCartCheckoutInfo transaction={transaction} />
      <Button text="Finalizar o Pedido" />
    </>
  )
}

export default Checkout
