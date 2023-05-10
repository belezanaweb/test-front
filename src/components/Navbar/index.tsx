import { NavLink } from 'react-router-dom'
import * as S from './styles'

const ROUTES = [
  { title: 'Sacola', path: '/' },
  { title: 'Pagamento', path: '/payment' },
  { title: 'Confirmação', path: '/confirmation' }
]

export const Navbar = () => (
  <S.Container>
    <S.Menu>
      {ROUTES.map((route, index) => (
        <S.MenuItem key={index}>
          <NavLink to={route.path}>{route.title}</NavLink>
        </S.MenuItem>
      ))}
    </S.Menu>
  </S.Container>
)
