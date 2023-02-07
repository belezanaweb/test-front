import { Currency } from '../../../../components/Currency'
import './style.scss'

interface BillingSummaryProps {
  shippingTotal: number
  subTotal: number
  discount: number
  total: number
}

export function BillingSummary({ subTotal, shippingTotal, discount, total }: BillingSummaryProps) {
  return (
    <section className='billing-summary'>
      <div className='products-row'>
        <span>Produtos:</span>
        <span><Currency>{subTotal}</Currency></span>
      </div>
      <div className='shipping-row'>
        <span>Frete:</span>
        <span><Currency>{shippingTotal}</Currency></span>
      </div>
      <div className='discount-row'>
        <span>Desconto:</span>
        <span><Currency>{discount}</Currency></span>
      </div>
      <div className='subtotal-row'>
        <span>Subtotal:</span>
        <span><Currency>{total}</Currency></span>
      </div>
    </section>
  )
}
