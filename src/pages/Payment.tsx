import { SyntheticEvent } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import GenericPage from '../components/GenericPage'
import PaymentOptions from '../components/PaymentOptions'
import Summary from '../components/Summary'
import usePaymentForm from '../hooks/usePaymentForm'

function Payment() {
  const { sendForm, state, dispatch } = usePaymentForm()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    sendForm()
  }

  console.log({ state })

  return (
    <GenericPage>
      <form className="flex flex-col items-center" action="#" onSubmit={onSubmit}>
        <Card>
          <PaymentOptions formState={state} dispatch={dispatch} />
        </Card>
        <Summary renderAction={() => <Button type="submit">Finalizar pedido</Button>} />
      </form>
    </GenericPage>
  )
}

export default Payment
