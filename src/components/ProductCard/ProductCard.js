import React from 'react'
import { MainContainer, Price, Image, Name } from './styles'

const ProductCard = (props) => {
  return (
    <MainContainer>
      <Image src={props.image} />
      <div>
        <Name>{props.name}</Name>
        <Price>R${props.price}</Price>
      </div>
    </MainContainer>
  )
}

export default ProductCard
