import React from 'react'

import Card from '../Card'
import ProductCard from '../../components/ProductCard'

interface Image {
  small: string
}

interface Item {
  product: {
    name: string
    imageObjects: Image[]
    priceSpecification: {
      price: number
    }
  }
}

interface Props {
  items: Item[]
  noPrice?: boolean
}

const ProductsList: React.FC<Props> = ({ items, noPrice = false }) => {
  return (
    <Card>
      {items.map((item, index: number) => (
        <ProductCard
          key={index}
          image={item.product?.imageObjects[0]?.small}
          title={item.product?.name}
          price={item.product?.priceSpecification.price}
          noPrice={noPrice}
        />
      ))}
    </Card>
  )
}

export default ProductsList
