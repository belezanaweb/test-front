import React from 'react'
import { ItemsContainer } from './styles'

function Items({ image, name, price }) {
  return (
    <ItemsContainer>
      <img src={image} alt="Imagem do produto" />
      <p>{name}</p>
      <strong>{price}</strong>
    </ItemsContainer>
  )
}

export default Items
