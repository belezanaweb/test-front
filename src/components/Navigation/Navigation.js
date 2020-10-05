import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <Link to="/">Sacola</Link>
      <Link to="/pagamento">Pagamento</Link>
      <Link to="/confirmacao">Confirmação</Link>
    </nav>
  )
}

export default Navigation
