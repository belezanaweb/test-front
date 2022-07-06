import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BagDetails, PaymentConfirmation, ProductPaper } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { CheckImage, Container, SuccessBox, SuccessParagraph } from './Confirmation.style'
import DoneIcon from '../../assets/images/done-icon.png'
import { PaymentFormContext } from '../../contexts/PaymentFormContext'

export const Confirmation = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const bag = useContext(BagContext)
  const navigate = useNavigate()
  const {
    formValues: { cardNumber, cardName, date }
  } = useContext(PaymentFormContext)

  useEffect(() => {
    setHeaderPosition(2)
    if (!bag) {
      navigate('/')
    }
  }, [bag, navigate, setHeaderPosition])

  return (
    <Container>
      <SuccessBox>
        <CheckImage alt="ícone de confirmação" src={DoneIcon} />
        <SuccessParagraph>Compra efetuada com sucesso</SuccessParagraph>
      </SuccessBox>
      <PaymentConfirmation cardNumber={cardNumber} cardName={cardName} date={date} />
      {bag && (
        <>
          <ProductPaper bag={bag} showPrice={false} sizeVariant="thumbnail" />
          <BagDetails bag={bag} />
        </>
      )}
    </Container>
  )
}
