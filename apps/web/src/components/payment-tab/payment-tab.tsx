import {
  CreditCardCvvTextField,
  CreditCardDueDateTextField,
  CreditCardTextField,
  TextField
} from 'ui'
import { Card } from '../card'
import { SyntheticEvent } from 'react'
import { useTabsContext } from 'ui'
import { useFormContext } from 'react-hook-form'

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
