import { usePayment } from '../hooks/usePayment'

export function Confirmation() {
  const { payment } = usePayment()
  console.log(payment)
  return <h1>Confirmation</h1>
}
