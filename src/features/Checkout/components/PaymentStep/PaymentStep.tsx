import { useForm } from 'react-hook-form'
import { Billing, PaymentFormValues, Product } from '../../types'
import { BillingSummary } from '../BillingSummary'
import { CreditCardInput } from '../CreditCardInput'
import './style.scss'

interface PaymentStepProps { 
  billing: Billing,
  products: Product[]
  finalizeOrderHandler: (value: PaymentFormValues) => void
}

export function PaymentStep({ products, billing, finalizeOrderHandler }: PaymentStepProps) {
  const { control, formState: { isValid }, handleSubmit } = useForm<PaymentFormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  return (
    <form className='payment-step' onSubmit={handleSubmit(finalizeOrderHandler)}>
      <CreditCardInput control={control} />
      <section className='payment-action'>
        <BillingSummary 
          shippingTotal={billing.shippingTotal}
          subTotal={billing.subTotal}
          discount={billing.discount}
          total={billing.total}
          qntItems={products.length}
        />
        <button 
          type='submit'
          className={isValid ? 'payment-button': 'payment-button-disabled'}
          disabled={!isValid}>Finalizar pedido</button>
      </section>
    </form>
  )
}