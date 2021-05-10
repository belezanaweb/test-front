import React from 'react'
import PropTypes from 'prop-types'

import { Container, NavbarItem } from './index.css'

const Navbar = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <NavbarItem key={item.key} active={!!item.active}>
          {item.name}
        </NavbarItem>
      ))}
    </Container>
  )
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool
    })
  ).isRequired
}

export default Navbar
