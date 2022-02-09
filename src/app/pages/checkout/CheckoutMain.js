import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import Button from '../../components/layout/Button'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Checkout = () => {
  const [transaction, setTransaction] = useContext(TransactionContext)
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    setTransaction((prev) => ({
      ...prev,
      creditCard: {
        number: data.number,
        name: data.name,
        expiration: data.expiration,
        cvc: data.cvc
      }
    }))
    navigate('/wow-moment')
  }

  return (
    <>
      <TitleSection title="Pagamento" />
      <form>
        <input type="number" {...register('number', { required: true, maxLength: 20 })} />
        <input {...register('name', { required: true })} />
        <input {...register('expiration', { required: true })} />
        <input {...register('cvc', { required: true })} />
        <SliceCartCheckoutInfo transaction={transaction} />
        <Button onClick={handleSubmit(onSubmit)} text="Finalizar o Pedido" />
      </form>
    </>
  )
}

export default Checkout
