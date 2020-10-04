import React from 'react'
import { useHistory } from 'react-router-dom'
import { PagesContent, PagesWrapper } from '../../AppStyle'
import BackgroundBlock from '../../components/BackgroundBlock'
import Button from '../../components/Button'
import CartSummary from '../../components/CartSummary'
import Header from '../../components/Header'
import CardDetails from './CardDetails'

const Payment = () => {
  const history = useHistory()

  return (
    <PagesWrapper>
      <Header selectedPage={"payment"} />
      <PagesContent onSubmit={() => history.push("/confirmation")}>
        <BackgroundBlock title={"CARTÃO DE CRÉDITO"} boxContent={<CardDetails />} />
        <CartSummary />
        <Button text={"FINALIZAR O PEDIDO"} />
      </PagesContent>
    </PagesWrapper>
  )
}

export default Payment