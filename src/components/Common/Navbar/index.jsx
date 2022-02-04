import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'

/**
 *  Function to render the Header component
 */

export default function Navbar() {
  const cardStorage = JSON.parse(localStorage.getItem('gb:card'))
  const active = !!cardStorage
  const handleClick = (e) => {
    if (!active) {
      e.preventDefault()
    }
  }
  return (
    <Container select={true}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => 'title' + (!isActive ? '' : ' selected')}>
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
            onClick={handleClick}
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
