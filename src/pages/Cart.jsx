import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { ProductCard } from "../components/ProductCard"
import { PriceList } from "../components/PriceList";

import axios from "axios"
import { useEffect, useState } from "react";

export function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        setCart(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <Header activeItem='sacola'></Header>
      {cart.items?.length > 0 &&  (
        <>
          <Content title='Produtos' type='white'>
            {cart.items.map((item) => (
              <ProductCard key={item.product.sku} product={{name: item.product.name, image: item.product.imageObjects[0].thumbnail, price: item.product.priceSpecification.price}}/>
            ))}
          </Content>
          <Content>
            <PriceList prices={{subTotal: cart.subTotal, shippingTotal: cart.shippingTotal, discount: cart.discount, total: cart.total}}/>
          </Content>
        </>
      )}
    </>
  )
}