import React, { useState } from 'react'
import ConfirmPage from '../ConfirmPage'

function PaymentPage() {
  const infoCart = JSON.parse(window.localStorage.getItem('infoCart'))
  const [cardNumber, setCardNumber] = useState()
  const [userName, setUserName] = useState()
  const [cardValidate, setCardValidate] = useState()
  const [cvv, setCvv] = useState()

  const handleInputCardNumber = (event) => {
    setCardNumber(event.target.value)
  }

  const handleInputUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleInputCardValidate = (event) => {
    setCardValidate(event.target.value)
  }

  const handleInputCvv = (event) => {
    setCvv(event.target.value)
  }

  const infoUser = {
    number: cardNumber,
    user: userName,
    card: cardValidate,
    cvv: cvv
  }

  console.log(infoUser)

  return (
    <div>
      <div>CARTÃO DE CRÉDITO</div>
      <div>
        <form>
          Numero do Cartão:
          <input
            type="text"
            required
            placeholder="____.____.____.____"
            value={cardNumber}
            onChange={handleInputCardNumber}
          ></input>
          Nome do titular:
          <input
            type="text"
            required
            placeholder="____.____.____.____"
            value={userName}
            onChange={handleInputUserName}
          ></input>
          Validade (mês/ano):
          <input
            type="text"
            required
            placeholder="____.____.____.____"
            value={cardValidate}
            onChange={handleInputCardValidate}
          ></input>
          CVV:
          <input
            type="text"
            required
            placeholder="____.____.____.____"
            value={cvv}
            onChange={handleInputCvv}
          ></input>
        </form>
      </div>
      <hr></hr>
      <div>
        <p>Produtos: {infoCart.subTotal.toFixed(2)}</p>
        <p>Frete: {infoCart.shippingTotal.toFixed(2)}</p>
        <p>Desconto: {infoCart.discount.toFixed(2)}</p>
        <p>Total: {infoCart.total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default PaymentPage
