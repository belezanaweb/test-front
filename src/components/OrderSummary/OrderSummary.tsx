import { useCheckout } from '../../stores'
import { OrderSummaryContainer, OrderSummaryItem } from './OrderSummary.styled'

import { formatToBRL } from '../../utils/formatCurrency'

export const OrderSummary = () => {
  const { checkout } = useCheckout()

  return (
    <OrderSummaryContainer>
      <OrderSummaryItem>
        <label>Produtos: ({checkout?.items.length ?? 0})</label>
        <div className="result">{formatToBRL.format(checkout?.subTotal ?? 0)}</div>
      </OrderSummaryItem>

      <OrderSummaryItem>
        <label>Frete:</label>
        <div className="result">{formatToBRL.format(checkout?.shippingTotal ?? 0)}</div>
      </OrderSummaryItem>

      <OrderSummaryItem $discount>
        <label>Desconto:</label>
        <div className="result">{formatToBRL.format(checkout?.discount ?? 0)}</div>
      </OrderSummaryItem>

      <OrderSummaryItem $highlight>
        <label>Subtotal</label>
        <div className="result">{formatToBRL.format(checkout?.total ?? 0)}</div>
      </OrderSummaryItem>
    </OrderSummaryContainer>
  )
}
