import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'

/**
 *  Function to render the Header component
 */

export default function Navbar() {
  return (
    <Container select={true}>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => 'title' + (!isActive ? '' : ' selected')}
          >
            SACOLA
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payment"
            className={({ isActive }) => 'title' + (!isActive ? '' : ' selected')}
          >
            PAGAMENTO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/confirmation"
            className={({ isActive }) => 'title' + (!isActive ? '' : ' selected')}
          >
            CONFIRMAÇÃO
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}
