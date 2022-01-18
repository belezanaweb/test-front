import React, { useContext } from 'react'
import CartTotal from '../component/CartTotal/CartTotal'
import ContainerPage from '../component/ContainerPage/ContainerPage'
import TitleContainer from '../component/TitleContainer/TitleContainer'
import { DataContext } from '../context/Context'
import PaymentResume from '../component/PaymentResume/PaymentResume'
import Card from '../component/Card/Card'
import FeedbackMessage from '../component/FeedbackMessage/FeedbackMessage'

const Confirmacao = () => {
  const [data] = useContext(DataContext)

  return (
    <ContainerPage>
      <FeedbackMessage message="COMPRA EFETUADA COM SUCESSO" />
      <PaymentResume
        cardNumber={data?.creditCard?.number}
        date={data?.creditCard?.date}
        name={data?.creditCard?.name}
      />
      <TitleContainer title={'PRODUTOS'}>
        {data.items?.map(({ product }) => {
          return (
            <Card
              image={product.imageObjects[0].small}
              name={product.name}
              key={product.sku}
              noPrice
            />
          )
        })}
      </TitleContainer>
      <CartTotal
        discountPrice={data?.discount}
        shippingPrice={data?.shippingTotal}
        productPrice={data?.subTotal}
        totalPrice={data?.total}
      />
    </ContainerPage>
  )
}

export default Confirmacao
