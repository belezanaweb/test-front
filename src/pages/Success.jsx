import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { ProductCard } from "../components/ProductCard"
import { PriceList } from "../components/PriceList";

import { useLocation } from "react-router-dom";

export function Success() {

  const { state } = useLocation();

  return (
    <>
      <Header activeItem='confirmação'></Header>
      <Content title='Pagamento' type='white'>
        Lorem Ipsum
      </Content>
      <Content title='Produtos' type='white'>
        {state.data.items.map((item) => (
          <ProductCard hideDetails key={item.product.sku} product={{name: item.product.name, image: item.product.imageObjects[0].thumbnail, price: item.product.priceSpecification.price}}/>
        ))}
      </Content>
      <Content>
        <PriceList prices={{subTotal: state.data.subTotal, shippingTotal: state.data.shippingTotal, discount: state.data.discount, total: state.data.total}}/>
      </Content>
    </>
  )
}