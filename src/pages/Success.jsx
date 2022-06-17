import { Header } from "../components/Header";
import { Content } from "../components/Content";

export function Success() {
  return (
    <>
      <Header activeItem='confirmação'></Header>
      <Content title='Pagamento' type='white'>
        Lorem Ipsum
      </Content>
      <Content title='Produtos' type='white'>
        Lorem Ipsum
      </Content>
      <Content>
        Lorem Ipsum
      </Content>
    </>
  )
}