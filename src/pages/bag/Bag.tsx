import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductPaper, BagDetails } from '../../components/molecules'
import { Button } from '../../components/atoms'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'

const Bag: React.FC = () => {
  const navigate = useNavigate()
  const bag = useContext(BagContext)
  const { setHeaderPosition } = useContext(HeaderContext)

  const handleGoToPaymentStep = () => {
    navigate('/payment')
  }

  useEffect(() => {
    setHeaderPosition(0)
  }, [setHeaderPosition])

  if (!bag) {
    return <></>
  }

  return (
    <>
      <ProductPaper bag={bag} />
      <BagDetails bag={bag} />
      <Button onClick={handleGoToPaymentStep}>seguir para o pagamento</Button>
    </>
  )
}

export { Bag }
