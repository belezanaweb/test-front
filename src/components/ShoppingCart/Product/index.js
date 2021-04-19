import React from 'react'
import {
  Container,
  ImageContainer,
  Image,
  NameContainer,
  Name,
  PriceContainer,
  Price
} from './styled'

const Product = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.thumbnail} alt="Imagem do produto" />
      </ImageContainer>
      <div>
        <NameContainer>
          <Name>{props.name}</Name>
        </NameContainer>
        <PriceContainer>
          <Price>R$ {props.price.toFixed(2).replace('.', ',')} </Price>
        </PriceContainer>
      </div>
    </Container>
  )
}

export { Product }
