import React from 'react'
import * as S from './Bag.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import Wrapper from '../../components/Wrapper/Wrapper'
import Values from '../../components/Values/Values'

const Home = () => {
  return (
    <S.BagBackgroud>
      <Header page={0} />
      <S.BagDiv>
        <Title text="PRODUTOS" />
        <Wrapper />
        <Values />
        <Button text="SEGUIR PARA O PAGAMENTO" />
      </S.BagDiv>
    </S.BagBackgroud>
  )
}

export default Home
