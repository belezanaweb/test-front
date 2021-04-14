import React from 'react'
import { CardContainer, Image, Name, Price } from './styled'

function CardProduct(props) {
  return (
    <CardContainer>
      <Image src={props.image} />
      <div>
        <Name>{props.name}</Name>
        <Price>{props.price}</Price>
      </div>
    </CardContainer>
  )
}

export default CardProduct
