import React, { useContext, useEffect } from 'react'
import { Paper } from '../../components/atoms'
import { BagDetails, ProductPaper } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import {
  CheckImage,
  ConfirmationDataParagraph,
  SuccessBox,
  SuccessParagraph
} from './Confirmation.style'
import DoneIcon from '../../assets/images/done-icon.png'
import { PaymentFormContext } from '../../contexts/PaymentFormContext'

export const Confirmation = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const bag = useContext(BagContext)
  const {
    formValues: { cardNumber, cardName, date }
  } = useContext(PaymentFormContext)

  useEffect(() => {
    setHeaderPosition(2)
  }, [setHeaderPosition])

  return (
    <>
      <SuccessBox>
        <CheckImage alt="ícone de confirmação" src={DoneIcon} />
        <SuccessParagraph>Compra efetuada com sucesso</SuccessParagraph>
      </SuccessBox>
      <Paper title="pagamento">
        <ConfirmationDataParagraph>{cardNumber}</ConfirmationDataParagraph>
        <ConfirmationDataParagraph>{cardName}</ConfirmationDataParagraph>
        <ConfirmationDataParagraph>{date}</ConfirmationDataParagraph>
      </Paper>
      {bag && (
        <>
          <ProductPaper bag={bag} showPrice={false} />
          <BagDetails bag={bag} />
        </>
      )}
    </>
  )
}
