import { BagContent } from "../BagContent"
import { Billing, Product } from "../../types"
import { BillingSummary } from "../BillingSummary"
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
          qntItems={products.length}
        />
        <button 
          className='checkout-button' 
          onClick={goToNextHandler}>Seguir para o pagamento</button>
      </section>
    </div>
  )
}
