import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PurchaseData from '../../components/PurchaseData/PurchaseData'
import Title from '../../components/Title/Title'
import CartContext from '../../context/CartContext'
import * as S from './Sucess.styled'

const Sucess = () => {
  const { items, paymentData } = useContext(CartContext)

  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const hiddeNumber = (cardNumber) => {
    return '****.****.****.' + cardNumber.substring(12)
  }
  return (
    <div>
      <S.SucessBackgroud>
        <Header page={2} />
        <S.SucessImg />
        <S.SucessDiv>
          <Title text="PAGAMENTO" />
        </S.SucessDiv>
        <S.userWrapper>
          <ul className="user-wrapper">
            <li>{hiddeNumber(paymentData.number)}</li>
            <li>{paymentData.name}</li>
            <li>{paymentData.expiry}</li>
          </ul>
        </S.userWrapper>
        <S.SucessDiv>
          <S.SucessWrapper>
            {items.map((item, index) => (
              <div className="items-card" key={index}>
                <div className="item-image">
                  <img src={item.product.imageObjects[0].small} alt="img" />
                </div>
                <div className="items-specs">
                  <p>{item.product.name}</p>
                  <h1>{changeParse(item.product.priceSpecification.price)}</h1>
                </div>
              </div>
            ))}
          </S.SucessWrapper>
          <PurchaseData />
        </S.SucessDiv>
      </S.SucessBackgroud>
    </div>
  )
}

export default Sucess
