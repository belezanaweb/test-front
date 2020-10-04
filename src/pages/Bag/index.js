import React from 'react'
import { PagesContent, PagesWrapper } from '../../AppStyle'
import Header from '../../components/Header'
import BackgroundBlock from '../../components/BackgroundBlock'
import ProductsList from './ProductsList'
import CartSummary from '../../components/CartSummary'
import Button from '../../components/Button'

const Bag = () => {
  return (
    <PagesWrapper>
      <Header selectedPage={"bag"} />
      <PagesContent>
        <BackgroundBlock title={"PRODUTOS"} boxContent={<ProductsList />} />
        <CartSummary />
        <Button text={"SEGUIR PARA O PAGAMENTO"} path={"/payment"} />
      </PagesContent>
    </PagesWrapper>
  )
}

export default Bag