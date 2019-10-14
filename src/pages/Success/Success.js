import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CheckoutPage from 'components/CheckoutPage'
import Container from 'components/Container'
import CartProductList from 'components/CartProductList'
import { StyledText, StyledSuccess, StyledSuccessText, StyledImage } from './style'
import { format, form } from 'utils'

const Success = props => {
  const { inputs } = form.useForm('payment')
  const { data } = useSelector(state => state.cart)

  useEffect(() => {
    if (data.items.length === 0) {
      props.history.push('/cart')
    }
  })

  return (
    <CheckoutPage
      noFooterButton
    >
      <StyledSuccess>
        <StyledImage alt='success' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAYAAACxHzfjAAABmUlEQVRYR82XzXHCMBBGP3USOoFKErrQLeSmLkIngUqgE2VWI3nkZWVJi8HShRnGNo/9ebs2GPR4iw8AvwCuZlBGeAuf2IaE9BZ/APbDQnobUvyVZfgwVCQFwKNxOA8D6S1OAL6zCP4YF77DEJDehvRSmtOZAIeA9DY0CDVKOmfjcMyts2kkowtvGdDFOBy4FreGnFwY0urk8tsMkrsQwM443KXhsglkSTWl6fd2SEE1wYVL4/mtkEsuHAJScOGDaorpjp76DCtRJezajanFhYuR9BbkKdrd6MxMr4Xi9+VrF4C7cdj1PNsIddKchpYfYkEourBakwLoJUaVPtVHXLscup85dbcASnBVPZT+Qa8Lq5FMFwgdqKpTrWqaZR5Bqdun9b2noWprl6Z2ijIX0kVTgbpfnK/048+4sDndgjr4tkyABPowxlrXrlUjmdUpBxXrlLlQpZrmmpQujGmk948k/Rloz9r1kkhmESVAAs1fN1Pa56+gCheqa7IQVSn96VK1V1eFjF3cVKea1Er3qPdJpptV5z0H/Qcrnp+5p2JMmAAAAABJRU5ErkJggg==' />
      </StyledSuccess>
      <StyledSuccessText>Compra efetuada com sucesso</StyledSuccessText>

      <Container title='Pagamento'>
        <StyledText>{format.maskCardNumber(inputs.cardNumber)}</StyledText>
        <StyledText>{inputs.name}</StyledText>
        <StyledText>{inputs.expirationDate}</StyledText>
      </Container>
      <CartProductList />

    </CheckoutPage >
  )
}

export default Success
