import React from 'react'

import { Container, Name } from './styles'
import { Link } from 'react-router-dom'

function MenuItem({ menu }) {
  return (
    <Container>
      <Name selected={true}>
        <Link to={menu.path}>{menu.name}</Link>
      </Name>
    </Container>
  )
}

export default MenuItem
