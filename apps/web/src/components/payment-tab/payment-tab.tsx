import { ReactNode, SyntheticEvent } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CreditCardCvvTextField,
  CreditCardDueDateTextField,
  CreditCardTextField,
  TextField,
  useTabsContext
} from 'ui'
import { Card } from '../card'

const paymentFormValidation = z.object({
  cardNumber: z.string().min(16, { message: 'insira um número de cartão válido' }),
  name: z.string().min(1, { message: 'insira um nome válido' }),
  dueDate: z.string().min(4, { message: 'insira uma data válida' }),
  cvv: z.string().min(3, { message: 'insira um cvv válido' })
})

export function PaymentTabFormProvider({ children }: { children: ReactNode }) {
  const methods = useForm({ resolver: zodResolver(paymentFormValidation), mode: 'onTouched' })
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const PAYMENT_TAB_FORM_ID = 'paymentTabForm'

export function PaymentTab() {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const tabs = useTabsContext()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    tabs.setTabKey('confirmation')
  }

  return (
    <Card className="gap-8 px-5 py-5">
      <h1 className="text-xl">Cartão de crédito</h1>
      <form id={PAYMENT_TAB_FORM_ID} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <CreditCardTextField
            {...register('cardNumber')}
            id="cardNumber"
            label="Número"
            helperText={errors.cardNumber?.message?.toString()}
          />
          <TextField
            {...register('name')}
            id="name"
            label="Nome do titular do cartão"
            helperText={errors.name?.message?.toString()}
          />
          <div className="flex gap-5">
            <CreditCardDueDateTextField
              {...register('dueDate')}
              id="dueDate"
              label="Data de validade"
              helperText={errors.dueDate?.message?.toString()}
            />
            <CreditCardCvvTextField
              {...register('cvv')}
              id="cvv"
              label="Código CVV"
              helperText={errors.cvv?.message?.toString()}
            />
          </div>
        </div>
      </form>
    </Card>
  )
}
