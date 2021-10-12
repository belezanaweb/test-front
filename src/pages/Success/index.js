import React from 'react'
import Card from '../../components/Card'
import PurchaseSummary from '../../components/PurchaseSummary'
import Products from '../../components/Products'
import { useSelector } from 'react-redux'
import checkIcon from '../../assets/check.svg'
import * as S from './styles'
import format from '../../helpers/utility'
import * as M from '../../styles/structure'

const Success = () => {
  const { creditCardData } = useSelector((state) => state.cart)

  return (
    <>
      <S.SuccessContainer>
        <S.IconContainer>
          <img src={checkIcon} alt="" />
        </S.IconContainer>
        <S.SuccessText>Compra efetuada com sucesso</S.SuccessText>
      </S.SuccessContainer>
      <M.Main data-testid="success-page">
        <div>
          <Card title="Pagamento">
            {creditCardData && (
              <>
                <S.Text>{format.hideCardNumber(creditCardData.cardNumber)}</S.Text>
                <S.Text>{creditCardData.name}</S.Text>
                <S.Text>{creditCardData.expirationDate}</S.Text>
              </>
            )}
          </Card>
          <Products noPrice />
        </div>
        <PurchaseSummary />
      </M.Main>
    </>
  )
}

export default Success
