import React from 'react'
import './successContainer.css'
import { Title } from '../../commons/title'
import { CartList } from '../cartContainer/components/cartList'
import { PriceSummary } from '../../commons/priceSummary'
import Circle from '../../assets/Circle.png'

const SuccessContainer = () => (
  <div className="success">
    <Title text="PAGAMENTO" />

    <Title text="PRODUTOS" />
    {/* <CartList /> */}
    <PriceSummary subTotal={0} shippingTotal={0} discount={0} total={0} />
  </div>
)

export { SuccessContainer }
