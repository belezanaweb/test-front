import { OrderPayload } from '../../types'
import { hideCreditCard } from '../../utils/hideCreditCard'
import './style.scss'

interface SuccessfulCardProps {
  payload: OrderPayload
}

export function SuccessfulCard({ payload }: SuccessfulCardProps) {
  const { creditCardPayment: { 
    creditCardNumber,
    name,
    expirationDate
  } } = payload

  return (
    <section className='success-card'>
      <h1>Compra efetuada com sucesso</h1>
      <p>{creditCardNumber && hideCreditCard(creditCardNumber)}</p>
      <p>{name}</p>
      <p>{expirationDate}</p>
    </section>
  )
}