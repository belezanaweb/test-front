import React, { useContext } from 'react'
import InputMask from 'react-input-mask'

import useForm from '../../helpers/useForm'
import CreditCardInput from './CreditCardInput'
import InputField from './InputField'
import CartSummary from '../CartSummary'
import CheckoutFormContext from '../../context/CheckoutFormContext'
import formSchema from './formSchema'
import { useHistory } from 'react-router-dom'
import { OrderContext } from '../../context/OrderContext'
import CartContext from '../../context/CartContext'

const CheckoutForm: React.FC = () => {
  const [order, setOrder] = useContext(OrderContext)
  const cart = useContext(CartContext)
  const onSubmit = () => {
    // @ts-ignore: Object with any
    const haveErrors = Object.keys(values).filter(key => !values[key].isValid)
    if (haveErrors[0]) return
    sendDataToOrder()
  }
  const { values, handleChange, handleSubmit } = useForm(onSubmit, formSchema)
  const history = useHistory()

  const sendDataToOrder = () => {
    // @ts-ignore: Object with any
    const { creditcard, cardholder, expdate } = values
    const details = { creditcard, cardholder, expdate }
    // @ts-ignore: Object with any
    setOrder({
      cart,
      details
    })

    history.push('/pedido')
  }
  return (
    <section className="checkout-form">
      <CheckoutFormContext.Provider value={values}>
        <form onSubmit={handleSubmit}>
          <InputField label="Número do Cartão" name="creditcard">
            <CreditCardInput handleChange={handleChange} />
          </InputField>
          <InputField label="Nome do Titular" name="cardholder">
            <input
              required
              onChange={handleChange}
              name="cardholder"
              placeholder="Como no cartão"
            />
          </InputField>
          <InputField label="Validade (mês/ano)" name="expdate">
            <InputMask
              required
              name="expdate"
              placeholder="__/____"
              mask="99/9999"
              onChange={handleChange}
            />
          </InputField>
          <InputField label="CVV" name="cvv">
            <InputMask required name="cvv" placeholder="___" mask="999" onChange={handleChange} />
          </InputField>

          <CartSummary />
          <input type="submit" value="Finalizar o pedido" />
        </form>
      </CheckoutFormContext.Provider>
    </section>
  )
}

export default CheckoutForm
