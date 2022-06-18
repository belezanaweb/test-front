import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Button } from "../components/Button";

export function Payment() {
  return (
    <>
      <Header activeItem='pagamento'></Header>
      <Content title='Cartão de Crédito' type='white'>
        Lorem Ipsum
      </Content>
      <Content>
        Lorem Ipsum
      </Content>
      <Button>Finalizar o pedido</Button>
    </>
  )
}