import React, { useContext } from 'react'
import Button from '../component/Button/Button'
import CartTotal from '../component/CartTotal/CartTotal'
import ContainerPage from '../component/ContainerPage/ContainerPage'
import TitleContainer from '../component/TitleContainer/TitleContainer'
import { DataContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import PaymentData from '../component/PaymentData/PaymentData'

const Confirmacao = () => {
  const [data] = useContext(DataContext)
  const navigate = useNavigate()

  return (
    <ContainerPage>
      <TitleContainer title={'CARTÃO DE CRÉDITO'}>
        <PaymentData />
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
