import { NavLink } from 'react-router-dom'
import * as Styled from './styles'

const Navigation = () => {
  return (
    <Styled.Navigation>
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
    </Styled.Navigation>
  )
}

export { Navigation }
