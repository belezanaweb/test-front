import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductPaper, BagDetails, PageSkeleton } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container } from './Bag.style'
import { getBag } from './service'

const Bag: React.FC = () => {
  const navigate = useNavigate()
  const { bag, setBag } = useContext(BagContext)
  const { setHeaderPosition } = useContext(HeaderContext)

  const handleGoToPaymentStep = () => {
    navigate('/payment')
  }

  useEffect(() => {
    const loadBag = async () => {
      if (!bag) {
        const productsList = await getBag()
        setBag(productsList)
      }
    }

    loadBag()
  }, [bag, setBag])

  useEffect(() => {
    setHeaderPosition(0)
  }, [setHeaderPosition])

  if (!bag) {
    return <PageSkeleton />
  }

  return (
    <Container>
      <ProductPaper bag={bag} />
      <BagDetails
        bag={bag}
        buttonData={{ label: 'seguir para o pagamento', action: handleGoToPaymentStep }}
      />
    </Container>
  )
}

export { Bag }
