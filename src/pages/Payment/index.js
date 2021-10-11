import React, { useRef } from 'react'
import Card from '../../components/Card'
import PurchaseSummary from '../../components/PurchaseSummary'
import Button from '../../components/Button'
import PaymentForm from '../../components/form/PaymentForm'
import * as M from '../../styles/structure'

const Payment = () => {
  const formRef = useRef(null)

  const handleSubmit = () => {
    formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }

  return (
    <M.Main>
      <Card title="Cartão de crédito">
        <PaymentForm formRef={formRef} />
      </Card>
      <div>
        <PurchaseSummary />
        <Button label="Finalizar o pedido" onClick={handleSubmit} />
      </div>
    </M.Main>
  )
}

export default Payment
