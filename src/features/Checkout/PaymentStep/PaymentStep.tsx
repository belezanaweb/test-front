import { useForm } from "react-hook-form"
import { Billing } from "../components/BagContent/types"
import { BillingSummary } from "../components/BillingSummary"
import { CreditCardInput } from "../components/CreditCardInput"
import './style.scss'

interface PaymentStepProps { 
  billing: Billing,
  finalizeOrderHandler: (value: any) => void
}

export function PaymentStep({ billing, finalizeOrderHandler }: PaymentStepProps) {
  const { control, formState: { isValid }, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  return (
    <form className='payment-step' onSubmit={handleSubmit(finalizeOrderHandler)}>
      <CreditCardInput control={control} />
      <section className='summary-action'>
        <BillingSummary 
          shippingTotal={billing.shippingTotal}
          subTotal={billing.subTotal}
          discount={billing.discount}
          total={billing.total}
        />
        <button 
          type="submit"
          className={isValid ? 'checkout-button': 'checkout-button-disabled'}
          disabled={!isValid}>Finalizar pedido</button>
      </section>
    </form>
  )
}