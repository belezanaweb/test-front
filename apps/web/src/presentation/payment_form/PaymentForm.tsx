import { usePaymentForm } from '@/core'
import { Card, InputField } from '@test-front/common-ui'
import { ReactNode } from 'react'
import { FormProvider, useFormContext } from 'react-hook-form'

export const PAYMENT_FORM_ID = 'payment_form'

export type PaymentFormValues = {
  cardNumber: string,
  holderName: string,
  dueDate: string,
  cvv: string
}

export function PaymentFormProvider({ children }: { children: ReactNode }) {
  const methods = usePaymentForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export default function PaymentForm() {
  const { register, formState: {errors}  } = useFormContext<PaymentFormValues>();

  return (
    <Card className="gap-8">
      <h1 className="mb-4 text-xl">Cartão de crédito</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="flex flex-col gap-5">
          <InputField
            {...register('cardNumber')}
            id="cardNumber"
            placeholder="0000 0000 0000"
            mask="9999 9999 9999 9999"
            label="Número"
            errorText={errors.cardNumber?.message}
          />

          <InputField
            {...register('holderName')}
            id="name"
            label="Nome do titular do cartão"
            placeholder="Nome impresso no cartão"
            errorText={errors.holderName?.message}
          />

          <div className="flex gap-5">
            <InputField
              {...register('dueDate')}
              id="dueDate"
              label="Data de validade"
              mask="99/99"
              placeholder='MM/AA'
              errorText={errors.dueDate?.message}
            />
            <InputField
              {...register('cvv')}
              id="cvv"
              label="Código CVV"
              placeholder='000'
              mask="999"
              errorText={errors.cvv?.message}
            />
          </div>
        </div>
      </form>
    </Card>
  )
}
