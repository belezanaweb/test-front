import { Container, Title, Text } from "./CardSuccessPayment.style"

type CardSuccessPaymentProps = {
  numberCard: string
  name: string
  birthDate: string
}

export default function cardSuccessPayment({ numberCard, name, birthDate }: CardSuccessPaymentProps) {
  return (
    <Container>
      <Title>Compra efetuada com sucesso</Title>
      <Text>{numberCard}</Text>
      <Text>{name}</Text>
      <Text>{birthDate}</Text>
    </Container>
  )
}