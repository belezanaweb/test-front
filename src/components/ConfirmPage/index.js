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

            {/* <Button>
            <div>
              <TextGoToPayment>SEGUIR PARA O PAGAMENTO</TextGoToPayment>
            </div>
          </Button> */}
          </Products>
        </ContainerPayment>
      </RectangleBackground>
    </MainContainer>
    // <div>
    // <div>Pagamento</div>
    // <div>
    //   <p>{infoUser.number}</p>
    //   <p>{infoUser.user}</p>
    //   <p>{infoUser.cardValidate}</p>
    // </div>
    //   <div>Produtos</div>
    //   <div>{listProductsCart}</div>
    //   <hr></hr>
    //   <div>
    //     <p>Produtos: {infoCart.subTotal.toFixed(2)}</p>
    //     <p>Frete: {infoCart.shippingTotal.toFixed(2)}</p>
    //     <p>Desconto: {infoCart.discount.toFixed(2)}</p>
    //     <p>Total: {total.toFixed(2)}</p>
    //   </div>
    // </div>
  )
}

export default ConfirmPage
