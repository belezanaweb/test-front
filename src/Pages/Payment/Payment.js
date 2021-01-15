import React from 'react'
import Form from '../../Components/Form/index'
import { useSelector } from 'react-redux'
import Total from '../../Components/Total/index'
import Footer from '../../Components/Footer/index'
import { Container, Title } from '../../globalstyles'

export default function Payment() {
  const formvalid = useSelector((state) => state.FormReducer)
  const { buttonstatus } = true
  const conditional = () => {
    if (formvalid.numberCard && formvalid.cvv && formvalid.expiration) {
      return '/success'
    }
  }
  return (
    <Container>
      <Title>CARTÃO DE CRÉDITO</Title>
      <Form></Form>
      <Total />
      <Footer text="Finalizar o pagamento" buttonstatus={buttonstatus} nav={conditional()} />
    </Container>
  )
}
