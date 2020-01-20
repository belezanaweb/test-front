import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderStyle } from './styles'
import { OrderContext } from '../../context/OrderContext'

const Header: React.FC = () => {
  const [order] = useContext(OrderContext)
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-item" activeClassName="active" to="/carrinho">
              Sacola
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" activeClassName="active" to="/checkout">
              Pagamento
            </NavLink>
          </li>
          <li>
            {order ? (
              <NavLink className="nav-item" activeClassName="active" to="/pedido">
                Confirmação
              </NavLink>
            ) : (
              <span className="nav-item">Confirmação</span>
            )}
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header
