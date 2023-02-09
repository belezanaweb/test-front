import { BagContent } from "../components/BagContent"
import { Billing, Product } from "../components/BagContent/types"
import { BillingSummary } from "../components/BillingSummary"
import { SuccessfulCard } from "../components/SuccessfulCard"
import './style.scss'

interface BagStepProps { 
  payload: any
  products: Product[]
  billing: Billing,
  goToNextHandler: () => void
}

export function SuccessStep({ payload, products, billing, goToNextHandler }: BagStepProps) {
  return (
    <div className='bag-step'>
      <div className="scrollable-content">
        <SuccessfulCard payload={payload}  />
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
