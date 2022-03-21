import React, { useContext } from 'react'
import * as S from './Bag.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import CartContext from '../../context/CartContext'

const Home = () => {
  const { items, subTotal, total, shippingTotal, discount } = useContext(CartContext)

  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <S.BagBackgroud>
      <Header page={0} />
      <S.BagDiv>
        <Title text="PRODUTOS" />
        <S.BagWrapper>
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
        </S.BagWrapper>
        <S.BagValuesWrapper>
          <div className="products-display">
            <S.BagValuesP>PRODUTOS</S.BagValuesP>
            <p> {changeParse(subTotal)}</p>
          </div>
          <div className="products-display">
            <S.BagValuesP>FRETE</S.BagValuesP>
            <p> {changeParse(shippingTotal)}</p>
          </div>
          <div className="products-display">
            <S.BagValuesP color="#FF7800">DESCONTO</S.BagValuesP>
            <p color="#FF7800" className="change-color">
              {'- ' + changeParse(discount)}
            </p>
          </div>
          <div className="products-display">
            <S.BagValuesP>
              <strong>TOTAL</strong>
            </S.BagValuesP>
            <p>
              <strong>{changeParse(total)}</strong>
            </p>
          </div>
        </S.BagValuesWrapper>
        <Button text="SEGUIR PARA O PAGAMENTO" />
      </S.BagDiv>
    </S.BagBackgroud>
  )
}

export default Home
