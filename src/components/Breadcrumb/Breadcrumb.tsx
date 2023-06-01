import { useLocation, useNavigate } from 'react-router-dom'
import BreadcrumbItem from '../BreadcrumbItem/'

const isBreadcrumbActive = (pathname: string, navItem: string) => {
  return (pathname === '/' && navItem === '/') || (navItem != '/' && pathname.includes(navItem))
}

function Breadcrumb() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <nav className="flex justify-center">
      <ul className="w-fit flex justify-center h-10 border-b border-black">
        <BreadcrumbItem
          isActive={isBreadcrumbActive(location.pathname, '/')}
          onClick={() => navigate('/')}
        >
          Sacola
        </BreadcrumbItem>
        <BreadcrumbItem
          isActive={isBreadcrumbActive(location.pathname, 'pagamento')}
          onClick={() => navigate('/pagamento')}
        >
          Pagamento
        </BreadcrumbItem>
        <BreadcrumbItem isActive={isBreadcrumbActive(location.pathname, 'finaliza-pedido')}>
          Confirmação
        </BreadcrumbItem>
      </ul>
    </nav>
  )
}

export default Breadcrumb
