import React, { useContext, useEffect } from 'react'
import { Paper } from '../../components/atoms'
import { BagDetails, ProductPaper } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { CheckImage, SuccessBox, SuccessParagraph } from './Confirmation.style'
import DoneIcon from '../../assets/images/done-icon.png'

export const Confirmation = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const bag = useContext(BagContext)

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
        <p>****.****.****.1234</p>
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
