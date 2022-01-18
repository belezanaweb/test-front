import React, { useContext } from 'react'
import Button from '../component/Button/Button'
import CartTotal from '../component/CartTotal/CartTotal'
import ContainerPage from '../component/ContainerPage/ContainerPage'
import TitleContainer from '../component/TitleContainer/TitleContainer'
import { DataContext } from '../context/Context'
import PaymentData from '../component/PaymentData/PaymentData'

const Pagamento = () => {
  const [data] = useContext(DataContext)

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
      <Button text="FINALIZAR O PEDIDO" type="submit" form="creditForm" />
    </ContainerPage>
  )
}

export default Pagamento
