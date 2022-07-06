import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductPaper, BagDetails } from '../../components/molecules'
import { Button } from '../../components/atoms'
import { BagContext } from '../../contexts/BagContext'

const Bag: React.FC = () => {
  const navigate = useNavigate()
  const bag = useContext(BagContext)

  const handleGoToPaymentStep = () => {
    navigate('/payment')
  }

  if (!bag) {
    return <></>
  }

  return (
    <>
      <ProductPaper title="produtos" bag={bag} />
      <BagDetails bag={bag} />
      <Button onClick={handleGoToPaymentStep}>seguir para o pagamento</Button>
    </>
  )
}

export { Bag }
