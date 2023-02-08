import { BagContent } from "../components/BagContent"
import { Billing, Product } from "../components/BagContent/types"
import { BillingSummary } from "../components/BillingSummary"
import './style.scss'

interface BagStepProps { 
  products: Product[]
  billing: Billing,
  goToNextHandler: () => void
}

export function BagStep({ products, billing, goToNextHandler }: BagStepProps) {
  return (
    <div className='bag-step'>
      <BagContent key="Sacola" products={products} />
      <section className='summary-action'>
        <BillingSummary 
          shippingTotal={billing.shippingTotal}
          subTotal={billing.subTotal}
          discount={billing.discount}
          total={billing.total}
        />
        <button 
          className='checkout-button' 
          onClick={goToNextHandler}>Seguir para o pagamento</button>
      </section>
    </div>
  )
}
