import React, { useState } from 'react'
import * as S from './styles'
import bag from '../../assets/bag.png'
import { Redirect } from 'react-router-dom'

const Empty = () => {
  const [goToBag, setGoToBag] = useState(false)
  return (
    <>
      <S.Wrapper>
        <S.Image src={bag} alt="Two empty bags" />
        <S.Text>Eita! Parece que ainda não foi feita nenhuma compra.</S.Text>
        <S.Button onClick={() => setGoToBag(true)}>
          Que tal conferir nossos produtos?
        </S.Button>
      </S.Wrapper>
      {goToBag && <Redirect to="/" />}
    </>
  )
}

export default Empty
