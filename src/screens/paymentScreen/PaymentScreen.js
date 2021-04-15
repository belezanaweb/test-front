import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/globalStateContext'
import { useForm } from '../../hooks/useForm'
import { goToConfirmation } from '../../routers/Coordinator'
import PriceCard from '../../components/PriceCard/PriceCard'
import { Button, FormContainer, Input, Label, Text, ButtonNone } from './styled'
import Loading from '../../components/Loading'
import { maskCard } from '../../components/maskNumberCard'

function PaymentScreen() {
  const history = useHistory()
  const { cart, getProducts, setCard } = useContext(GlobalStateContext)
  const { form, onChange } = useForm({ cardNumber: '', name: '', expirationDate: '', cvv: '' })
  const [checkButton, setCheckButton] = useState({ disabled: true })
  const formatCardNumber = maskCard(form.cardNumber)

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
      cardNumber: formatCardNumber,
      name: form.name,
      expirationDate: form.expirationDate
    }
    setCard(data)
    setCheckButton(false)
  }

  return (
    <div>
      <Header />
      <Text>CARTÃO DE CRÉDITO</Text>
      <div>
        <FormContainer onSubmit={handleSubmit}>
          <Label>Número do Cartão</Label>
          <div>
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
              pattern="(0[1-9]|10|11|12)[- /.](20)\d\d$"
              placeholder="__/____"
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
          </div>

          <ButtonNone type="submit" onClick={() => checkButton}>
            enviar
          </ButtonNone>
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
        <Button disabled={checkButton} onClick={() => goToConfirmation(history)} type="submit">
          FINALIZAR O PEDIDO
        </Button>
      </div>
    </div>
  )
}

export default PaymentScreen
