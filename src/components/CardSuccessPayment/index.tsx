type CardSuccessPaymentProps = {
  numberCard: string
  name: string
  birthDate: string
}

export default function cardSuccessPayment({ numberCard, name, birthDate }: CardSuccessPaymentProps) {
  return (
    <div>
      <div>Compra efetuada com sucesso</div>
      <div>{numberCard}</div>
      <div>{name}</div>
      <div>{birthDate}</div>
    </div>
  )
}