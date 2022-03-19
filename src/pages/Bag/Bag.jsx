import React from 'react'
import * as S from './Bag.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <S.BagBackgroud>
      <S.BagDiv>
        <Header page={0} />
        <Title text="PRODUTOS" />
        <Button text="SEGUIR PARA O PAGAMENTO" />
      </S.BagDiv>
    </S.BagBackgroud>
  )
}

export default Home
