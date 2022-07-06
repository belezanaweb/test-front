import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBag } from './service'
import { ProductPaper, BagDetails } from '../../components/molecules'
import { BagBox } from './Bag.style'
import { Button } from '../../components/atoms'

const Bag: React.FC = () => {
  const [bag, setBag] = useState<ProductBag>()
  const navigate = useNavigate()

  const handleGoToPaymentStep = () => {
    navigate('/payment')
  }

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
      <Button onClick={handleGoToPaymentStep}>seguir para o pagamento</Button>
    </BagBox>
  )
}

export { Bag }
