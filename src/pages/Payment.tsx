import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'
import PaymentFields from '@/components/payment/PaymentFields'

import { StepPathname } from '@/entities/Step'
import { useCart } from '@/contexts/cart'
import { usePayment } from '@/contexts/payment'

type Inputs = {
  cardNumber: string
  cardholder: string
  cardExpiringDate: string
  cvv: string
}

function Payment (): React.ReactElement | null {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const { cart } = useCart()
  const history = useHistory()
  const { storePaymentDetail } = usePayment()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    storePaymentDetail({
      cardholder: data.cardholder,
      cardExpirationDate: data.cardExpiringDate,
      cardNumberHashed: data.cardNumber
    }).then((response) => {
      history.push(StepPathname.Confirmacao)
    })
  }

  if (!cart) {
    return null
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PaymentFields register={register} errors={errors} />
        <ResumeValues />
        <Button text="Finalizar pedido" isSubmit />
      </form>
    </>
  )
}

export default Payment
