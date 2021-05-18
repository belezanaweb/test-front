import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Name } from './styles'
import { Link } from 'react-router-dom'

import { handlSelectedMenu } from '../../../store/actions/menu'

function MenuItem({ menu }) {
  const dispatch = useDispatch()

  const menuSelected = useSelector((state) => state.menu.selected)

  return (
    <Container>
      <Name
        onClick={() => dispatch(handlSelectedMenu(menu.name))}
        selected={menuSelected === menu.name}
      >
        <Link to={menu.path}>{menu.name}</Link>
      </Name>
    </Container>
  )
}

export default MenuItem
