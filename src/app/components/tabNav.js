import React from 'react'
import { ContainerTabNav } from './tabNav.style'
import { Link } from 'react-router-dom'
const TabNav = () => {
  return (
    <ContainerTabNav>
      <nav>
        <ul>
          <li>
            <Link to="/cart">SACOLA</Link>
          </li>
          <li>
            <Link to="/checkout">PAGAMENTO</Link>
          </li>
          <li>
            <Link to="/wow-moment">CONFIRMAÇÃO</Link>
          </li>
        </ul>
      </nav>
    </ContainerTabNav>
  )
}

export default TabNav
