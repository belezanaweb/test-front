import React from 'react'
import {
  MainContainer,
  Steps,
  RectangleSteps,
  RectangleBackground,
  ContainerPayment,
  RectangleContainerPayment,
  Products,
  RectangleProducts,
  Total,
  Button,
  Product,
  ImageProduct,
  TextProducts,
  NameProduct,
  PriceProduct,
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
  TextGoToPayment,
  Container1,
  Container2,
  Container3,
  Container4,
  TextContainerPayment,
  TextUserInfo,
  ContainerUserInfo,
  Shape,
  RectangleSucessfull,
  TextSucessfull
} from './styles'
import Image1 from './images/image1.png'

function ConfirmPage() {
  const infoUser = JSON.parse(window.localStorage.getItem('infoUser'))
  const infoCart = JSON.parse(window.localStorage.getItem('infoCart'))
  const total = infoCart.subTotal + infoCart.shippingTotal - infoCart.discount

  let number = infoUser.number
  let hiddenNumber = number.slice(-4).padStart(number.length, '****.')

  const listProductsCart = infoCart.items.map((item) =>
    item.product.imageObjects.map((image) => (
      <Product>
        <ImageProduct src={image.small} alt="product"></ImageProduct>
        <NameProduct>{item.product.name}</NameProduct>
      </Product>
    ))
  )

  return (
    <MainContainer>
      <RectangleBackground>
        <Steps>
          <RectangleSteps>
            <TextBag>SACOLA</TextBag>
            <TextPayment>PAGAMENTO</TextPayment>
            <TextConfirm>CONFIRMAÇÃO</TextConfirm>
          </RectangleSteps>
        </Steps>
        <RectangleSucessfull>
          <Shape>
            <img src={Image1} alt="sucessfull"></img>
          </Shape>
          <TextSucessfull>COMPRA EFETUADA COM SUCESSO</TextSucessfull>
        </RectangleSucessfull>

        <ContainerPayment>
          <TextContainerPayment>PAGAMENTO</TextContainerPayment>
          <RectangleContainerPayment>
            <ContainerUserInfo>
              <TextUserInfo>{hiddenNumber}</TextUserInfo>
              <TextUserInfo>{infoUser.user}</TextUserInfo>
              <TextUserInfo>{infoUser.cardValidate}</TextUserInfo>
            </ContainerUserInfo>
          </RectangleContainerPayment>
          <Products>
            <TextProducts>PRODUTOS</TextProducts>
            <RectangleProducts>{listProductsCart}</RectangleProducts>
            <Total>
              <Container1>
                <TextTotalProducts>PRODUTOS</TextTotalProducts>
                <TextPriceProducts>
                  R$ {infoCart.subTotal.toFixed(2).replace('.', ',')}
                </TextPriceProducts>
              </Container1>
              <Container2>
                <TextShipment>FRETE</TextShipment>
                <TextPriceShipment>
                  R$ {infoCart.shippingTotal.toFixed(2).replace('.', ',')}
                </TextPriceShipment>
              </Container2>
              <Container3>
                <TextDiscount>DESCONTO</TextDiscount>
                <TextPriceDiscount>
                  - R$ {infoCart.discount.toFixed(2).replace('.', ',')}
                </TextPriceDiscount>
              </Container3>
              <Container4>
                <TextTotal>TOTAL</TextTotal>
                <TextPriceTotal>R$ {total.toFixed(2).replace('.', ',')} </TextPriceTotal>
              </Container4>
            </Total>
          </Products>
        </ContainerPayment>
      </RectangleBackground>
    </MainContainer>
  )
}

export default ConfirmPage
