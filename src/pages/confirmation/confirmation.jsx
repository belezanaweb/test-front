import React, { useContext } from 'react'
import CartTotal from '../../component/CartTotal'
import ContainerPage from '../../component/ContainerPage'
import TitleContainer from '../../component/TitleContainer'
import { DataContext } from '../../context/Context'
import PaymentResume from '../../component/PaymentResume'
import Card from '../../component/Card'
import FeedbackMessage from '../../component/FeedbackMessage'
import * as S from '../Pages.styles'

const Confirmation = () => {
  const [data] = useContext(DataContext)

  return (
    <ContainerPage>
      <FeedbackMessage message="COMPRA EFETUADA COM SUCESSO" />
      <S.DesktopFlex>
        <S.FirstContainer>
          <PaymentResume
            cardNumber={data?.creditCard?.number}
            date={data?.creditCard?.date}
            name={data?.creditCard?.name}
          />
          <TitleContainer title={'PRODUTOS'}>
            {data.items?.map(({ product }) => {
              return (
                <Card
                  image={product.imageObjects[0]}
                  name={product.name}
                  key={product.sku}
                  noPrice
                />
              )
            })}
          </TitleContainer>
        </S.FirstContainer>
        <S.SecondContainer>
          <CartTotal
            discountPrice={data?.discount}
            shippingPrice={data?.shippingTotal}
            productPrice={data?.subTotal}
            totalPrice={data?.total}
          />
        </S.SecondContainer>
      </S.DesktopFlex>
    </ContainerPage>
  )
}

export default Confirmation
