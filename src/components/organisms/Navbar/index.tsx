import React from 'react'
import { useNavigate } from 'react-router-dom'

import Link from '../../atoms/Link'
import { Nav } from './styles'
import { useCheckout } from '../../../providers/checkout'

type NavType = {
  id: number
  active: boolean
  name: string
}

function Navbar() {
  const { navigation } = useCheckout()
  const navigate = useNavigate()

  function navigationBack(itemClicked: string) {
    if (
      itemClicked.toUpperCase() === 'SACOLA' &&
      (window.location.pathname === '/pagamento' || window.location.pathname === '/confirmacao')
    ) {
      navigate('/sacola')
    } else if (
      itemClicked.toUpperCase() === 'PAGAMENTO' &&
      window.location.pathname === '/confirmacao'
    ) {
      navigate('/pagamento')
    }
  }

  return (
    <Nav>
      <div className="navLinks">
        {navigation.map((nav: NavType) => (
          <Link
            key={nav.id}
            active={window.location.pathname.toUpperCase() === `/${nav.name.toUpperCase()}`}
            func={() => navigationBack(nav.name)}
          >
            {nav.name === 'Confirmacao' ? 'Confirmação' : nav.name}
          </Link>
        ))}
      </div>
    </Nav>
  )
}

export default Navbar
