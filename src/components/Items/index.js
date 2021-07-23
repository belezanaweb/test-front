import React from 'react'
import { ItemsContainer, WrapperInformations } from './styles'

function Items({ image, name, price }) {
  return (
    <ItemsContainer>
      <img src={image} alt="Imagem do produto" />
      <WrapperInformations>
        <p>{name}</p>
        <strong>{price || ''}</strong>
      </WrapperInformations>
    </ItemsContainer>
  )
}

export default Items
