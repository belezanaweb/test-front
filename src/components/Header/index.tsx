import { usePayment } from '../../hooks/usePayment'
import { CustomNavLink, HeaderContainer } from './styles'

export function Header() {
  const { isPaid } = usePayment()
  return (
    <HeaderContainer>
      <nav>
        <CustomNavLink to="/bag">Sacola</CustomNavLink>
        <CustomNavLink to="/payment">Pagamento</CustomNavLink>
        <CustomNavLink to="/confirmation" disabled={!isPaid}>
          Confirmação
        </CustomNavLink>
      </nav>
    </HeaderContainer>
  )
}
