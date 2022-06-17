import { Header } from "../components/Header";
import { Content } from "../components/Content";

export function Cart() {
  return (
    <>
      <Header activeItem='sacola'></Header>
      <Content title='Produtos' type='white'>
        Lorem Ipsum
      </Content>
      <Content>
        Lorem Ipsum
      </Content>
    </>
  )
}