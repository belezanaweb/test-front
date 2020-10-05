import React from 'react'
import { PagesContent, PagesWrapper } from '../../AppStyle'
import BackgroundBlock from '../../components/BackgroundBlock'
import CartSummary from '../../components/CartSummary'
import Header from '../../components/Header'
import SucessImage from '../../images/success.png'
import ProductsList from './ProductsList'
import PaymentData from './PaymentData'
import { SuccessImg } from './style'

const Confirmation = () => (
  <PagesWrapper>
    <Header selectedPage={"confirmation"} />
    <PagesContent>
      <SuccessImg src={SucessImage} alt="success" />
      <BackgroundBlock title={"PAGAMENTO"} boxContent={<PaymentData />} />
      <BackgroundBlock title={"PRODUTOS"} boxContent={<ProductsList />} />
      <CartSummary />
    </PagesContent>
  </PagesWrapper>
)

export default Confirmation