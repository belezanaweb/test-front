import { Card, Button } from '../../shared'

import {
  CheckoutCardContainer,
  CheckoutCardContent,
  CheckoutCardDetails,
  CheckoutCardDetailsContainer
} from './Checkout.styled'

import { OrderSummary } from '../OrderSummary'
import { ProductList } from '../ProductList'

export type CheckoutCartProps = {
  onPayment?: () => void
}

export const CheckoutCart = ({ onPayment }: CheckoutCartProps) => {
  return (
    <CheckoutCardContainer>
      <CheckoutCardContent>
        <Card>
          <ProductList />
        </Card>
      </CheckoutCardContent>

      <CheckoutCardDetails>
        <CheckoutCardDetailsContainer>
          <OrderSummary />
          <Button onClick={onPayment}>Seguir para pagamento</Button>
        </CheckoutCardDetailsContainer>
      </CheckoutCardDetails>
    </CheckoutCardContainer>
  )
}
