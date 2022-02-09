import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import SliceCartItems from '../../components/slices/CartItems.slices'
import Button from '../../components/layout/Button'
import Loading from '../../components/layout/Loading'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Cart = () => {
  const navigate = useNavigate()

  const [transaction] = useContext(TransactionContext)
  const [loading, setLoading] = useState(true)

  const goToNextStep = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <>
      <TitleSection title="Produtos" />
      {loading && <Loading />}
      {!loading && (
        <>
          <SliceCartItems transaction={transaction} />
          <SliceCartCheckoutInfo transaction={transaction} />
          <Button onClick={() => goToNextStep()} text="Seguir para o Pagamento" />
        </>
      )}
    </>
  )
}

export default Cart
