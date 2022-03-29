import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PurchaseData from '../../components/PurchaseData/PurchaseData'
import Title from '../../components/Title/Title'
import CartContext from '../../context/CartContext'
import * as S from './Sucess.styled'

const Sucess = () => {
  const { items, paymentData } = useContext(CartContext)

  const hiddeCardNumber = (cardNumber) => {
    return '****.****.****.' + cardNumber.substring(12)
  }
  return (
    <S.SucessBackgroud>
      <Header page={2} />
      <S.SucessImg />
      <S.SucessDiv>
        <Title color={999} size={14} text="PAGAMENTO" />
      </S.SucessDiv>
      <S.UserWrapper>
        <S.StyledUl>
          <li>{hiddeCardNumber(paymentData.number)}</li>
          <li>{paymentData.name}</li>
          <li>{paymentData.expiry}</li>
        </S.StyledUl>
      </S.UserWrapper>
      <S.SucessDiv>
        <Title color={999} size={14} text="PRODUTOS" />
        <S.SucessWrapper>
          {items.map((item, index) => (
            <S.ItemCard key={index}>
              <S.ItemImage>
                <img src={item.product.imageObjects[0].small} alt="img" />
              </S.ItemImage>
              <S.ItemSpecs>
                <p>{item.product.name}</p>
              </S.ItemSpecs>
            </S.ItemCard>
          ))}
        </S.SucessWrapper>
        <PurchaseData />
      </S.SucessDiv>
    </S.SucessBackgroud>
  )
}

export default Sucess
