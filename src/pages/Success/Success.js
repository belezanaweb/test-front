import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckoutPage from 'components/CheckoutPage'
import { useForm } from 'utils/form.utils'
import Container from 'components/Container'
import CartProductList from 'components/CartProductList'
import { StyledText } from './style'
import { maskCardNumber } from 'utils/format.utils'

const Success = props => {
  const { inputs } = useForm('payment')
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
      <Container title='Pagamento'>
        <StyledText>{maskCardNumber(inputs.cardNumber)}</StyledText>
        <StyledText>{inputs.name}</StyledText>
        <StyledText>{inputs.expirationDate}</StyledText>
      </Container>
      <CartProductList />

    </CheckoutPage>
  )
}

export default Success
