import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/globalStateContext'
import { useForm } from '../../hooks/useForm'
import { goToConfirmation } from '../../routers/Coordinator'
import PriceCard from '../../components/PriceCard/PriceCard'
import { Button, FormContainer, Input, Label, PaymentContainer, Text, ButtonNone } from './styled'
import Loading from '../../components/Loading'

function PaymentScreen() {
  const history = useHistory()
  const { cart, getProducts, setUseCard } = useContext(GlobalStateContext)
  const { form, onChange } = useForm({ cardNumber: '', name: '', expirationDate: '', cvv: '' })
  const [checkButton, setCheckButton] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const handleInputChange = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      cardNumber: form.cardNumber,
      name: form.name,
      expirationDate: form.date
    }
    setUseCard(data)
    setCheckButton(true)
  }

  return (
    <PaymentContainer>
      <Header />
      <Text>CARTÃO DE CRÉDITO</Text>
      <div>
        <FormContainer onSubmit={handleSubmit}>
          <Label>Número do Cartão</Label>
          <Input
            required
            name="cardNumber"
            value={form.cardNumber}
            type="text"
            pattern="\d{16}|[^0-9]*\d{1}){16}|(\d{4}(\d{4}){3}"
            placeholder="_ _ _ _-_ _ _ _-_ _ _ _-_ _ _ _"
            onChange={handleInputChange}
          />

          <Label>Nome do Titular</Label>
          <Input
            required
            name="name"
            value={form.name}
            type="text"
            placeholder="Como no cartão"
            onChange={handleInputChange}
          />

          <Label>Data de Validade (mês/ano)</Label>
          <Input
            required
            name="expirationDate"
            value={form.expirationDate}
            type="text"
            pattern="\d{2}\/\d{2}"
            placeholder="__/__"
            onChange={handleInputChange}
          />

          <Label>CVV</Label>
          <Input
            required
            name="cvv"
            value={form.cvv}
            type="text"
            pattern="\d{3}$"
            placeholder="_ _ _"
            onChange={handleInputChange}
          />
          <ButtonNone type="submit">enviar</ButtonNone>
        </FormContainer>

        {cart ? (
          <div>
            <PriceCard
              subTotal={cart.subTotal}
              shippingTotal={cart.shippingTotal}
              discount={cart.discount}
              total={cart.total}
            />
          </div>
        ) : (
          <Loading />
        )}
        {checkButton ? (
          <Button onSubmit={handleSubmit} onClick={() => goToConfirmation(history)} type="submit">
            FINALIZAR O PEDIDO
          </Button>
        ) : (
          ''
        )}
      </div>
    </PaymentContainer>
  )
}

export default PaymentScreen
