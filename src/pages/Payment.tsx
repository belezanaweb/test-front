import { SyntheticEvent } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import GenericPage from '../components/GenericPage'
import PaymentOptions from '../components/PaymentOptions'
import Summary from '../components/Summary'
import usePaymentForm from '../hooks/usePaymentForm'

function Payment() {
  const { sendForm, state, Component, actions } = usePaymentForm()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    sendForm()
  }

  return (
    <GenericPage>
      <form className="flex flex-col items-center w-full" action="#" onSubmit={onSubmit}>
        <Card className="md:mt-[10vh]">
          <PaymentOptions formState={state} Component={Component} actions={actions} />
        </Card>
        <Summary renderAction={() => <Button type="submit">Finalizar pedido</Button>} />
      </form>
    </GenericPage>
  )
}

export default Payment
