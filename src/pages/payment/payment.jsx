import React, { useContext } from 'react'
import Button from '../../component/Button'
import CartTotal from '../../component/CartTotal'
import ContainerPage from '../../component/ContainerPage'
import TitleContainer from '../../component/TitleContainer'
import { DataContext } from '../../context/Context'
import PaymentData from '../../component/PaymentData'
import * as S from '../Pages.styles'

const Payment = () => {
  const [data] = useContext(DataContext)

  return (
    <ContainerPage deskFlex>
      <S.FirstContainer>
        <TitleContainer title={'CARTÃO DE CRÉDITO'}>
          <PaymentData />
        </TitleContainer>
      </S.FirstContainer>
      <S.SecondContainer>
        <CartTotal
          discountPrice={data?.discount}
          shippingPrice={data?.shippingTotal}
          productPrice={data?.subTotal}
          totalPrice={data?.total}
        />
        <Button text="FINALIZAR O PEDIDO" type="submit" form="creditForm" />
      </S.SecondContainer>
    </ContainerPage>
  )
}

export default Payment
