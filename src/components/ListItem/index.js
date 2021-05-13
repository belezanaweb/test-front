import React from 'react'
import PropTypes from 'prop-types'

import { maskMoney } from '../../utils/validations'

import { Container, Image, ContainerInfos, ProductName, ProductPrice } from './styles.css'

const ListItem = ({ imageURL, name, price }) => {
  return (
    <Container>
      <Image>
        <img src={imageURL} alt="" />
      </Image>
      <ContainerInfos>
        <ProductName>{name}</ProductName>
        <ProductPrice>{maskMoney(price)}</ProductPrice>
      </ContainerInfos>
    </Container>
  )
}

ListItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default ListItem
