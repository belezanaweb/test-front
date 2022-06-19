import Header from '../../components/Header'
import Content from '../../components/Content'
import ProductCard from '../../components/ProductCard'
import PriceList from '../../components/PriceList'
import CardInfo from '../../components/CardInfo'
import { headerItems } from '../../types'

import { useLocation } from 'react-router-dom'

const Success = () => {
  const { state } = useLocation()

  return (
    <>
      <Header activeItem={headerItems.CONFIRMAÇÃO} headerItems={Object.values(headerItems)} />
      <Content title="Pagamento" type="white" noGap>
        <CardInfo data={state.formData} />
      </Content>
      <Content title="Produtos" type="white">
        {state.data.items.map((item) => (
          <ProductCard
            hideDetails
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
        <PriceList {...state.data} />
      </Content>
    </>
  )
}

export default Success
