import { useState } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import { BagStep } from './components/BagStep'
import { PaymentStep } from './components/PaymentStep'
import { useBagContent } from './hooks/useBagContent'
import { getBilling } from './utils/getBilling'
import { getProducts } from './utils/getProducts'
import { SuccessStep } from './components/SuccessStep'
import { CheckoutStep, OrderPayload, PaymentFormValues } from './types'
import './style.scss'

export function Checkout() {
  const [selected, setSelected] = useState(CheckoutStep.Bag)
  const [orderPayload, setOrderPayload] = useState<OrderPayload>()
  const { data } = useBagContent()
  const products = getProducts(data)
  const billing = getBilling(data)

  const handleChangeTab = (section: CheckoutStep) => {
    setSelected(section)
  }
  
  const finalizeOrderHandler = (formValues: PaymentFormValues) => {
    setOrderPayload({
      creditCardPayment: formValues,
      products,
    })
    setSelected(CheckoutStep.Success)
  }

  return (
    <Tabs selected={selected} fixed disabled={[CheckoutStep.Success]} onChange={handleChangeTab}>
      <BagStep 
        key="Sacola" 
        products={products} 
        billing={billing} 
        goToNextHandler={() => setSelected(CheckoutStep.Payment)} />
      <PaymentStep 
        key="Pagamento" 
        products={products} 
        billing={billing} 
        finalizeOrderHandler={finalizeOrderHandler} />
      <SuccessStep 
        key="Confirmação"
        payload={orderPayload}
        products={products} 
        billing={billing} 
        goToNextHandler={() => setSelected(CheckoutStep.Bag)} />
    </Tabs>
  )
}