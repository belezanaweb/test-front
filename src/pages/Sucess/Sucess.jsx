import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PurchaseData from '../../components/PurchaseData/PurchaseData'
import Title from '../../components/Title/Title'
import CartContext from '../../context/CartContext'
import * as S from './Sucess.styled'

const Sucess = () => {
  const { items, paymentData } = useContext(CartContext)

  const hiddeNumber = (cardNumber) => {
    return '****.****.****.' + cardNumber.substring(12)
  }
  return (
    <S.SucessBackgroud>
      <Header page={2} />
      <S.SucessImg />
      <S.SucessDiv>
        <Title color={999} size={14} text="PAGAMENTO" />
      </S.SucessDiv>
      <S.userWrapper>
        <ul className="user-wrapper">
          <li>{hiddeNumber(paymentData.number)}</li>
          <li>{paymentData.name}</li>
          <li>{paymentData.expiry}</li>
        </ul>
      </S.userWrapper>
      <S.SucessDiv>
        <Title color={999} size={14} text="PRODUTOS" />
        <S.SucessWrapper>
          {items.map((item, index) => (
            <div className="items-card" key={index}>
              <div className="items-image">
                <img src={item.product.imageObjects[0].small} alt="img" />
              </div>
              <div className="items-specs">
                <p>{item.product.name}</p>
              </div>
            </div>
          ))}
        </S.SucessWrapper>
        <PurchaseData />
      </S.SucessDiv>
    </S.SucessBackgroud>
  )
}

export default Sucess
