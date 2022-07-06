import React, { useEffect, useState } from 'react'
import { Title } from '../../components/atoms'
import { getBag } from './service'
import { ProductPaper, BagDetails } from '../../components/molecules'
import { BagBox } from './Bag.style'

const Bag: React.FC = () => {
  const [bag, setBag] = useState<ProductBag>()

  useEffect(() => {
    const loadBag = async () => {
      const productsList = await getBag()
      setBag(productsList)
    }

    loadBag()
  }, [])

  if (!bag) {
    return <></>
  }

  console.log(bag)

  return (
    <BagBox>
      <Title>Produtos</Title>

      <ProductPaper bag={bag} />

      <BagDetails bag={bag} />
    </BagBox>
  )
}

export { Bag }
