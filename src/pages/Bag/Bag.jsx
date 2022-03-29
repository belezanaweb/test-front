import React, { useContext } from 'react'
import * as S from './Bag.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import CartContext from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import PurchaseData from '../../components/PurchaseData/PurchaseData'

const Home = () => {
  const { items } = useContext(CartContext)

  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/payment')
  }

  return (
    <S.BagBackgroud>
      <Header page={0} />
      <S.BagDiv>
        <Title color={999} size={14} text="PRODUTOS" />
        <S.BagWrapper>
          {items.map((item, index) => (
            <S.ItemsCard key={index}>
              <S.ItemImage>
                <img src={item.product.imageObjects[0].small} alt="img" />
              </S.ItemImage>
              <S.ItemSpecs>
                <p>{item.product.name}</p>
                <h1>{changeParse(item.product.priceSpecification.price)}</h1>
              </S.ItemSpecs>
            </S.ItemsCard>
          ))}
        </S.BagWrapper>
        <PurchaseData />
        <Button onClick={handleClick} text="SEGUIR PARA O PAGAMENTO" />
      </S.BagDiv>
    </S.BagBackgroud>
  )
}

export default Home
