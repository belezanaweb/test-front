import { NavLink } from 'react-router-dom'
import { Nav } from './styles'

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Sacola</NavLink>
        </li>
        <li>
          <NavLink to="payment">Pagamento</NavLink>
        </li>
        <li>
          <NavLink to="confirmation" className="non-clickable">Confirmação</NavLink>
        </li>
      </ul>
    </Nav>
  )
}

export { Navigation }
