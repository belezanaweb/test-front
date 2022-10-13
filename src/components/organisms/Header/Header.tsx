import * as Style from './Header.styles'

interface ContainerProps {
  activeItem?: number;
}

const Header: React.FC<ContainerProps> = ({ activeItem }) => {
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
