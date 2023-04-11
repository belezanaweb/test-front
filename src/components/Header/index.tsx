import { CustomNavLink, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <CustomNavLink to="/bag">Sacola</CustomNavLink>
        <CustomNavLink to="/payment">Pagamento</CustomNavLink>
        <CustomNavLink to="/confirmation">Confirmação</CustomNavLink>
      </nav>
    </HeaderContainer>
  )
}
