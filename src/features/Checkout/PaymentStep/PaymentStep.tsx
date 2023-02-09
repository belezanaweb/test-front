import { useForm } from "react-hook-form"
import { Billing, Product } from "../components/BagContent/types"
import { BillingSummary } from "../components/BillingSummary"
import { CreditCardInput } from "../components/CreditCardInput"
import './style.scss'

interface PaymentStepProps { 
  billing: Billing,
  products: Product[]
  finalizeOrderHandler: (value: any) => void
}

export function PaymentStep({ products, billing, finalizeOrderHandler }: PaymentStepProps) {
  const { control, formState: { isValid }, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })
  return (
    <form className='payment-step' onSubmit={handleSubmit(finalizeOrderHandler)}>
      <CreditCardInput control={control} />
      <section className='summary-action'>
        <BillingSummary 
          shippingTotal={billing.shippingTotal}
          subTotal={billing.subTotal}
          discount={billing.discount}
          total={billing.total}
          qntItems={products.length}
        />
        <button 
          type="submit"
          className={isValid ? 'checkout-button': 'checkout-button-disabled'}
          disabled={!isValid}>Finalizar pedido</button>
      </section>
    </form>
  )
}