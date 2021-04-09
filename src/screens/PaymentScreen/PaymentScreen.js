import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import Loading from '../../components/Loading'
import PriceCard from '../../components/PriceCard/PriceCard'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Button, MainContainer, Title } from './styles'
import { useForm } from '../../hooks/useForm'
import { maskCardNumber } from '../../services/mask'

const PaymentScreen = () => {
  const history = useHistory()
  const { cart, getProducts, setUserCard } = useContext(GlobalStateContext)
  const { form, onChange } = useForm({ cardNumber: '', name: '', date: '', cvv: '' })
  const formatedCardNumber = maskCardNumber(form.cardNumber)

  useEffect(() => {
    getProducts()
  }, [])

  const handleSubmission = (e) => {
    e.preventDefault()
    const data = {
      cardNumber: formatedCardNumber,
      name: form.name,
      date: form.date
    }
    setUserCard(data)
  }

  return (
    <div>
      <Title>CARTÃO DE CRÉDITO</Title>
      <MainContainer>
        <div>
          <form onSubmit={handleSubmission}>
            <input
              required
              type="text"
              value={form.cardNumber}
              onChange={onChange}
              name="cardNumber"
              pattern="\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b$"
              placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _"
            />
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Como no cartão"
            />
            <input
              required
              type="text"
              name="date"
              pattern="(0[1-9]|10|11|12)/20[0-9]{2}$"
              value={form.date}
              onChange={onChange}
              placeholder="_ _/_ _ _ _"
            />
            <input
              required
              type="text"
              name="cvv"
              value={form.cvv}
              onChange={onChange}
              pattern="\d{3}$"
            />
            <button type="submit">enviar</button>
          </form>
        </div>
        {cart ? (
          <PriceCard
            subTotal={cart.subTotal}
            shipping={cart.shippingTotal}
            discount={cart.discount}
          />
        ) : (
          <Loading />
        )}
        <Button onSubmit={handleSubmission} type="submit">
          FINALIZAR PEDIDO
        </Button>
      </MainContainer>
    </div>
  )
}

export default PaymentScreen