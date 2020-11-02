import React, { useContext, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { PaymentContext } from '../../store/PaymentStore'
import { Button } from '../../components/Button/Button'
import { PaymentForm } from '../../components/PaymentForm/PaymentForm'
import { PurchaseSummary } from '../../components/PurchaseSummary/PurchaseSummary'
import { Stepper } from '../../components/Stepper/Stepper'
import { Layout, LayoutGrid, LayoutAside } from '../../components/Layout/Layout'

const Payment = () => {
  const formRef = useRef()
  const history = useHistory()
  const paymentContext = useContext(PaymentContext)
  const [isValid, setIsValid] = useState(false)

  const onChangeHandler = () => {
    setIsValid([...formRef.current.elements].every((el) => el.checkValidity()))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (!isValid) return

    const formData = new FormData(formRef.current)

    const ccNumber = formData.get('cardnumber')
    const ccName = formData.get('ccname')
    const ccExpiry = formData.get('cc-exp')

    paymentContext.dispatch.ccNumber(ccNumber)
    paymentContext.dispatch.ccName(ccName)
    paymentContext.dispatch.ccExpiry(ccExpiry)

    history.push('/confirmacao')
  }

  return (
    <Layout>
      <Stepper steps={steps} />
      <LayoutGrid>
        <PaymentForm ref={formRef} onSubmit={onSubmitHandler} onChange={onChangeHandler} />
        <LayoutAside>
          <PurchaseSummary {...summary} />
          <Button type="submit" form="_form" disabled={!isValid}>
            Finalizar o pedido
          </Button>
        </LayoutAside>
      </LayoutGrid>
    </Layout>
  )
}

const steps = [
  {
    title: 'Sacola'
  },
  {
    active: true,
    title: 'Pagamento'
  },
  {
    title: 'Confirmação'
  }
]

const summary = {
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
}

export default Payment
