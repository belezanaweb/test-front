import { hideCreditCard } from '../../utils/hideCreditCard'
import './style.scss'

interface SuccessfulCardProps {
  payload?: any
}

export function SuccessfulCard({ payload }: SuccessfulCardProps) {
  return (
    <section className='success-card'>
      <h1>Compra efetuada com sucesso</h1>
      <p>{payload?.creditCardNumber && hideCreditCard(payload?.creditCardNumber)}</p>
      <p>{payload?.name}</p>
      <p>{payload?.expirationDate}</p>
    </section>
  )
}