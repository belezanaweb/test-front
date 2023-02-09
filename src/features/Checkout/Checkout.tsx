import { useState } from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import { BagStep } from './BagStep'
import { PaymentStep } from './PaymentStep'
import { useBagContent } from './hooks/useBagContent'
import { getBilling } from './utils/getBilling'
import { getProducts } from './utils/getProducts'
import { SuccessStep } from './SuccessStep'
import './style.scss'

export function Checkout() {
  const [selected, setSelected] = useState("Sacola")
  const [orderPayload, setOrderPayload] = useState<any>(null)
  const { data } = useBagContent()
  const products = getProducts(data)
  const billing = getBilling(data)
  console.log(orderPayload)

  const handleChangeTab = (section: string) => {
    setSelected(section)
  }
  
  const finalizeOrderHandler = (formValues: any) => {
    setOrderPayload({
      payment: formValues,
      products,
    })
    setSelected("Confirmação")
  }
  return (
    <Tabs selected={selected} onChange={handleChangeTab}>
      <BagStep 
        key="Sacola" 
        products={products} 
        billing={billing} 
        goToNextHandler={() => setSelected('Pagamento')} />
      <PaymentStep 
        key="Pagamento" 
        products={products} 
        billing={billing} 
        finalizeOrderHandler={finalizeOrderHandler} />
      <SuccessStep 
        key="Confirmação"
        payload={orderPayload?.payment}
        products={products} 
        billing={billing} 
        goToNextHandler={() => setSelected('Sacola')} />
    </Tabs>
  )
}