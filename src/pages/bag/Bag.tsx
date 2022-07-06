import React, { useEffect, useState } from 'react'
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

  return (
    <BagBox>
      <ProductPaper title="produtos" bag={bag} />
      <BagDetails bag={bag} />
    </BagBox>
  )
}

export { Bag }
