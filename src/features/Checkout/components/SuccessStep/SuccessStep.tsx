import { BagContent } from "../BagContent"
import { Billing, OrderPayload, Product } from "../../types"
import { BillingSummary } from "../BillingSummary"
import { SuccessfulCard } from "../SuccessfulCard"
import './style.scss'

interface BagStepProps { 
  payload?: OrderPayload
  products: Product[]
  billing: Billing,
  goToNextHandler: () => void
}

export function SuccessStep({ payload, products, billing, goToNextHandler }: BagStepProps) {
  return (
    <div className='bag-step'>
      <div className="scrollable-content">
        {payload && <SuccessfulCard payload={payload}  />}
        <BagContent
          key="Sacola" 
          title='Produtos' 
          products={products}
          showPrices={false} />
      </div>
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
