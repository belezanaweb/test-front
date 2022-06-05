import React from 'react'
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

  return (
    <Nav>
      {navigation.map((nav: NavType) => (
        <Link
          key={nav.id}
          active={window.location.pathname.toUpperCase() === `/${nav.name.toUpperCase()}`}
        >
          {nav.name === 'Confirmacao' ? 'Confirmação' : nav.name}
        </Link>
      ))}
    </Nav>
  )
}

export default Navbar
