import { useContext } from 'react'
import { HeaderContext } from '../../../contexts/HeaderContext'
import * as Style from './Header.styles'

const Header: React.FC = () => {
  const { activeItem } = useContext(HeaderContext)
  return (
    <Style.Navbar>
      <Style.List>
        <Style.Item active={activeItem === 1}>sacola</Style.Item>
        <Style.Item active={activeItem === 2}>pagamento</Style.Item>
        <Style.Item active={activeItem === 3}>confirmação</Style.Item>
      </Style.List>
    </Style.Navbar>
  )
}

export default Header
