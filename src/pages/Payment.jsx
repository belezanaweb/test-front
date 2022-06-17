import { Header } from "../components/Header";
import { Content } from "../components/Content";

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
    </>
  )
}