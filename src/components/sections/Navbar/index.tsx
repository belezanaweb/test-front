import React from 'react'
import Link from '../../micro/Link'

import { Nav } from './styles'

function Navbar() {
  return (
    <Nav>
      <Link active={true}>Sacola</Link>
      <Link active={false}>Pagamento</Link>
      <Link active={false}>Confirmação</Link>
    </Nav>
  )
}

export default Navbar
