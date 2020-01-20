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
            <NavLink activeClassName="active" to="/carrinho">
              Sacola
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/checkout">
              Pagamento
            </NavLink>
          </li>
          <li>
            {order ? (
              <NavLink activeClassName="active" to="/pedido">
                Confirmação
              </NavLink>
            ) : (
              <a>Confirmação</a>
            )}
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header
