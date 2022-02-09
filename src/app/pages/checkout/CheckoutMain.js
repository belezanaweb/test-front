import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import apiCart from '../../../core/api/api.cart'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import Button from '../../components/layout/Button'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Checkout = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data2) => console.log(transaction)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction({ ...transaction, ...data })
    })
  }, [setTransaction, transaction])

  return (
    <>
      <TitleSection title="Pagamento" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('creditCard', { required: true, maxLength: 16 })} />
        <input type="submit" />
      </form>
      <SliceCartCheckoutInfo transaction={transaction} />
      <Button text="Finalizar o Pedido" />
    </>
  )
}

export default Checkout
