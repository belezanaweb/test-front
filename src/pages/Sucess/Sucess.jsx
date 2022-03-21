import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import CartContext from '../../context/CartContext'
import * as S from './Sucess.styled'

const Sucess = () => {
  const { items, number, name, expiry, subTotal, total, shippingTotal, discount } =
    useContext(CartContext)

  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const hiddeNumber = (cardNumber) => {
    const maskAllButLastFour = cardNumber.replace(/[0-9](?=([0-9]{4}))/g, '*')
    return maskAllButLastFour
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
            <li>{hiddeNumber(number)}</li>
            <li>{name}</li>
            <li>{expiry}</li>
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
          <S.SucessValuesWrapper>
            <div className="products-display">
              <S.SucessValuesP>PRODUTOS</S.SucessValuesP>
              <p> {changeParse(subTotal)}</p>
            </div>
            <div className="products-display">
              <S.SucessValuesP>FRETE</S.SucessValuesP>
              <p> {changeParse(shippingTotal)}</p>
            </div>
            <div className="products-display">
              <S.SucessValuesP color="#FF7800">DESCONTO</S.SucessValuesP>
              <p color="#FF7800" className="change-color">
                {'- ' + changeParse(discount)}
              </p>
            </div>
            <div className="products-display">
              <S.SucessValuesP>
                <strong>TOTAL</strong>
              </S.SucessValuesP>
              <p>
                <strong>{changeParse(total)}</strong>
              </p>
            </div>
          </S.SucessValuesWrapper>
        </S.SucessDiv>
      </S.SucessBackgroud>
    </div>
  )
}

export default Sucess
