import React from 'react'
import { formatValue } from '../../helpers/functions'
import { Image, ItemsContainer, WrapperInformations } from './styles'

function Items({ image, name, price, showPrice }) {
  return (
    <ItemsContainer>
      <Image src={image} alt="Imagem do produto" showPrice={showPrice} />
      <WrapperInformations>
        <p>{name}</p>
        {showPrice ? <strong>{formatValue(price) || ''}</strong> : null}
      </WrapperInformations>
    </ItemsContainer>
  )
}

export default Items
