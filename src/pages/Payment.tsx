import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'

import { StepPathname } from '@/entities/Step'
import PaymentFields from '@/components/payment/PaymentFields'

type Inputs = {
  cardNumber: string
  cardholder: string
  cardExpiringDate: string
  cvv: string
}

function Payment (): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const history = useHistory()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    history.push(StepPathname.Confirmacao)
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
