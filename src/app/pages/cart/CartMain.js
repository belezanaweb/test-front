import React, { useEffect, useState } from 'react'
import apiCart from '../../../core/api/api.cart'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import SliceCartItems from '../../components/slices/CartItems.slices'
import Button from '../../components/layout/Button'
import Loading from '../../components/layout/Loading'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Cart = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction(data)
      setLoading(false)
    })
  }, [loading, setTransaction])

  return (
    <>
      <TitleSection title="Produtos" />
      {loading && <Loading />}
      {!loading && (
        <>
          <SliceCartItems transaction={transaction} />
          <SliceCartCheckoutInfo transaction={transaction} />
          <Button text="Seguir para o Pagamento" />
        </>
      )}
    </>
  )
}

export default Cart
