import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from '..'

import { Container, Item } from './styles.css'

const List = ({ items }) => {
  return (
    <Container>
      {items?.map((item) => (
        <Item>
          <ListItem imageURL={item.imageURL} name={item.name} price={item.price} />
        </Item>
      ))}
    </Container>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      imageURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
}

export default List
