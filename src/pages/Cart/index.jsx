import Header from '../../components/Header'
import Content from '../../components/Content'
import ProductCard from '../../components/ProductCard'
import PriceList from '../../components/PriceList'
import Button from '../../components/Button'
import { headerItems } from '../../types'

import { useEffect, useState } from 'react'
import axios from 'axios'

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Header activeItem={headerItems.SACOLA} headerItems={Object.values(headerItems)} />
      {cart.items?.length > 0 && (
        <>
          <Content title="Produtos" type="white">
            {cart.items.map((item) => (
              <ProductCard
                key={item.product.sku}
                product={{
                  name: item.product.name,
                  image: item.product.imageObjects[0].small,
                  price: item.product.priceSpecification.price
                }}
              />
            ))}
          </Content>
          <Content>
            <PriceList {...cart} />
          </Content>
          <Button path="/payment" data={cart}>
            Seguir para o pagamento
          </Button>
        </>
      )}
    </>
  )
}

export default Cart
