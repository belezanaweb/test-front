import React from 'react'

import TotalizersItem from '../TotalizersItem/TotalizersItem';
import Card from '../../UI/Card/Card';

const TotalizersList = () => {
  const totalizers = {
    "subTotal": 624.8,
    "shippingTotal": 5.3,
    "discount": 30,
    "total": 618.9,
  }

  const items = [
    {
      name: 'Produtos',
      price: totalizers.subTotal,
      highlight: false,
    },
    {
      name: 'Frete',
      price: totalizers.shippingTotal,
      highlight: false,
    },
    {
      name: 'Desconto',
      price: -totalizers.discount,
      highlight: false,
    },
    {
      name: 'Total',
      price: totalizers.total,
      highlight: true,
    },
  ]

  return (
    <Card transparent>
      {items.map((totalizer, index) =>
        <TotalizersItem
          key={index}
          name={totalizer.name}
          price={totalizer.price}
          highlight={totalizer.highlight}
        />
      )}
    </Card>
  )
}

export default TotalizersList
