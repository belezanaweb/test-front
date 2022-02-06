import React from 'react'
import { ContainerTabNav } from './TabNav.style'
import { NavLink } from 'react-router-dom'
const TabNav = () => {
  return (
    <ContainerTabNav>
      <nav>
        <ul>
          <li>
            <NavLink to="/cart">SACOLA</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">PAGAMENTO</NavLink>
          </li>
          <li>
            <NavLink to="/wow-moment">CONFIRMAÇÃO</NavLink>
          </li>
        </ul>
      </nav>
    </ContainerTabNav>
  )
}

export default TabNav
