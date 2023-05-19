import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../../stores'

import { Card, Button } from '../../shared'

import { OrderSummary } from '../OrderSummary'
import { ProductList } from '../ProductList'

import {
  CheckoutCardContainer,
  CheckoutCardContent,
  CheckoutCardDetails,
  CheckoutCardDetailsContainer,
  CheckoutResume,
  CheckoutResumeTitle
} from './Checkout.styled'

export const CheckoutConfirm = () => {
  const { checkout } = useCheckout()
  const navigate = useNavigate()

  return (
    <CheckoutCardContainer>
      <CheckoutCardContent>
        <Card centered>
          <CheckoutResume>
            <CheckoutResumeTitle>Compra efetuada com sucesso</CheckoutResumeTitle>
            <span>{`****.****.****.${checkout?.card?.number.substr(-4)}`}</span>
            <span>{checkout?.card?.holderName}</span>
            <span>{checkout?.card?.expiry}</span>
          </CheckoutResume>
        </Card>
        <Card>
          <ProductList title="Produtos" />
        </Card>
      </CheckoutCardContent>

      <CheckoutCardDetails>
        <CheckoutCardDetailsContainer>
          <OrderSummary />
          <Button onClick={() => navigate('/')} $block variant="dark">
            Voltar ao início do protótipo
          </Button>
        </CheckoutCardDetailsContainer>
      </CheckoutCardDetails>
    </CheckoutCardContainer>
  )
}
