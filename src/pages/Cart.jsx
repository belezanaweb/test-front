import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { ProductCard } from "../components/ProductCard"

export function Cart() {
  return (
    <>
      <Header activeItem='sacola'></Header>
      <Content title='Produtos' type='white'>
        <ProductCard />
      </Content>
      <Content>
        Lorem Ipsum
      </Content>
    </>
  )
}