import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCheckout } from '../../stores'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Card, Input, InputMask, Button } from '../../shared'

import {
  CheckoutCardContainer,
  CheckoutCardContent,
  CheckoutCardDetails,
  CheckoutCardDetailsContainer,
  CheckoutCardForm,
  CheckoutCardFormControl
} from './Checkout.styled'

import { OrderSummary } from '../OrderSummary'
import { useEffect } from 'react'

const schema = z.object({
  number: z.string().min(1, { message: 'insira um número de cartão válido' }),
  holderName: z.string().min(1, { message: 'insira um nome válido' }),
  expiry: z.string().min(1, { message: 'insira uma data válida' }),
  cvv: z.string().min(1, { message: 'insira um cvv válido' })
})

export const CheckoutPayment = () => {
  const { checkout, updateCard } = useCheckout()
  const navigate = useNavigate()

  const {
    handleSubmit,
    getValues,
    reset,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: checkout?.card,
    resolver: zodResolver(schema)
  })

  const handleChange = (path: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCard({ ...getValues(), [path]: event.target.value })
  }

  const onSubmit = () => {
    navigate('/confirm')
  }

  useEffect(() => {
    if (checkout && Object.values(checkout?.card).every((value) => !value)) {
      reset()
    }
  }, [checkout?.card])

  return (
    <CheckoutCardContainer>
      <CheckoutCardContent>
        <Card>
          <h3>Cartão de crédito</h3>
          <CheckoutCardForm id="form" onSubmit={handleSubmit(onSubmit)}>
            <CheckoutCardFormControl>
              <InputMask
                label="Número"
                placeholder="0000 0000 0000 0000"
                mask="9999 9999 9999 9999"
                {...register('number')}
                onChange={handleChange('number')}
                error={errors.number?.message}
              />
            </CheckoutCardFormControl>

            <CheckoutCardFormControl>
              <Input
                label="Nome do titular do cartão"
                placeholder="Nome impresso no cartão"
                {...register('holderName')}
                onChange={handleChange('holderName')}
                error={errors.holderName?.message}
              />
            </CheckoutCardFormControl>

            <CheckoutCardFormControl>
              <InputMask
                label="Data de validade"
                placeholder="MM/AA"
                mask="99/9999"
                {...register('expiry')}
                onChange={handleChange('expiry')}
                error={errors.expiry?.message}
              />
              <InputMask
                label="Código CVV:"
                placeholder="000"
                mask="999"
                {...register('cvv')}
                onChange={handleChange('cvv')}
                error={errors.cvv?.message}
              />
            </CheckoutCardFormControl>
          </CheckoutCardForm>
        </Card>
      </CheckoutCardContent>

      <CheckoutCardDetails>
        <CheckoutCardDetailsContainer>
          <OrderSummary />
          <Button form="form">Finalizar pedido</Button>
        </CheckoutCardDetailsContainer>
      </CheckoutCardDetails>
    </CheckoutCardContainer>
  )
}
