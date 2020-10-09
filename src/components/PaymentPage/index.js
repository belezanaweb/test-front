import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  MainContainer,
  Steps,
  RectangleSteps,
  RectangleBackground,
  ContainerForm,
  ContainerRectangleForm,
  Total,
  Button,
  TextCreditCard,
  TextBag,
  TextPayment,
  TextConfirm,
  TextTotalProducts,
  TextPriceProducts,
  TextShipment,
  TextPriceShipment,
  TextDiscount,
  TextPriceDiscount,
  TextTotal,
  TextPriceTotal,
  TextFinish,
  Container1,
  Container2,
  Container3,
  Container4,
  Input1,
  Input2,
  Input3,
  Input4,
  TextUserName,
  TextCardValidate,
  TextCvv,
  TextCardNumber,
  ContainerValidate,
  ContainerCardNumber,
  ContainerUserName
} from './styles'

function PaymentPage() {
  const infoCart = JSON.parse(window.localStorage.getItem('infoCart'))
  const history = useHistory()

  const [cardNumber, setCardNumber] = useState()
  const [userName, setUserName] = useState()
  const [cardValidate, setCardValidate] = useState()
  const [cvv, setCvv] = useState()

  const total = infoCart.subTotal + infoCart.shippingTotal - infoCart.discount

  const infoUser = {
    number: cardNumber,
    user: userName,
    cardValidate: cardValidate,
    cvv: cvv
  }

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

  const goToConfirm = () => {
    history.push('/confirm')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('infoUser', JSON.stringify(infoUser))
    goToConfirm()
  }

  return (
    <MainContainer>
      <Steps>
        <RectangleSteps>
          <TextBag>SACOLA</TextBag>
          <TextPayment>PAGAMENTO</TextPayment>
          <TextConfirm>CONFIRMAÇÃO</TextConfirm>
        </RectangleSteps>
      </Steps>

      <RectangleBackground>
        <ContainerForm>
          <TextCreditCard>CARTÃO DE CRÉDITO</TextCreditCard>
          <form onSubmit={handleSubmit}>
            <ContainerRectangleForm>
              <ContainerCardNumber>
                <TextCardNumber>Numero do Cartão:</TextCardNumber>
                <Input1
                  type="text"
                  required
                  placeholder="____.____.____.____"
                  value={cardNumber}
                  onChange={handleInputCardNumber}
                ></Input1>
              </ContainerCardNumber>
              <ContainerUserName>
                <TextUserName>Nome do Titular:</TextUserName>
                <Input2
                  type="text"
                  required
                  placeholder="Como no cartão"
                  value={userName}
                  onChange={handleInputUserName}
                ></Input2>
              </ContainerUserName>
              <ContainerValidate>
                <div>
                  <TextCardValidate>Validade (mês/ano):</TextCardValidate>
                  <Input3
                    type="text"
                    required
                    placeholder="__/____"
                    value={cardValidate}
                    onChange={handleInputCardValidate}
                  ></Input3>
                </div>
                <div>
                  <TextCvv>CVV:</TextCvv>
                  <Input4
                    type="text"
                    required
                    placeholder="___"
                    value={cvv}
                    onChange={handleInputCvv}
                  ></Input4>
                </div>
              </ContainerValidate>
            </ContainerRectangleForm>
            <Total>
              <Container1>
                <TextTotalProducts>PRODUTOS</TextTotalProducts>
                <TextPriceProducts>R$ {infoCart.subTotal.toFixed(2)}</TextPriceProducts>
              </Container1>
              <Container2>
                <TextShipment>FRETE</TextShipment>
                <TextPriceShipment>R$ {infoCart.shippingTotal.toFixed(2)}</TextPriceShipment>
              </Container2>
              <Container3>
                <TextDiscount>DESCONTO</TextDiscount>
                <TextPriceDiscount>- R$ {infoCart.discount.toFixed(2)}</TextPriceDiscount>
              </Container3>
              <Container4>
                <TextTotal>TOTAL</TextTotal>
                <TextPriceTotal>R$ {total.toFixed(2)} </TextPriceTotal>
              </Container4>
            </Total>

            <Button type="submit">
              <div>
                <TextFinish>FINALIZAR O PEDIDO</TextFinish>
              </div>
            </Button>
          </form>
        </ContainerForm>
      </RectangleBackground>
    </MainContainer>
    // <div>
    //   <div>CARTÃO DE CRÉDITO</div>
    //   <div>
    // <form onSubmit={handleSubmit}>
    //   Numero do Cartão:
    //   <input
    //     type="text"
    //     required
    //     placeholder="____.____.____.____"
    //     value={cardNumber}
    //     onChange={handleInputCardNumber}
    //   ></input>
    //   Nome do titular:
    //   <input
    //     type="text"
    //     required
    //     placeholder="____.____.____.____"
    //     value={userName}
    //     onChange={handleInputUserName}
    //   ></input>
    //   Validade (mês/ano):
    //   <input
    //     type="text"
    //     required
    //     placeholder="____.____.____.____"
    //     value={cardValidate}
    //     onChange={handleInputCardValidate}
    //   ></input>
    //   CVV:
    //   <input
    //     type="text"
    //     required
    //     placeholder="____.____.____.____"
    //     value={cvv}
    //     onChange={handleInputCvv}
    //   ></input>
    //   <hr></hr>
    //   <div>
    //     <p>Produtos: {infoCart.subTotal.toFixed(2)}</p>
    //     <p>Frete: {infoCart.shippingTotal.toFixed(2)}</p>
    //     <p>Desconto: {infoCart.discount.toFixed(2)}</p>
    //     <p>Total: {total.toFixed(2)}</p>
    //   </div>
    //   <button type="submit">FINALIZAR O PEDIDO</button>
    // </form>
    //   </div>
    // </div>
  )
}

export default PaymentPage
