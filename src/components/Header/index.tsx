import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Sacola</Link>
          </li>
          <li>
            <Link to="/checkout">Pagamento</Link>
          </li>
          <li>
            <Link to="/pedido">Confirmação</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
