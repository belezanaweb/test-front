import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import './styles.css'

const Navbar = () => {
  const location = useLocation().pathname

  return (
    <div className="navbar">
      <Link className="navbarLink" to="/">
        <button className={classnames('navbarButton', location === '/' ? 'current' : '')}>
          SACOLA
        </button>
      </Link>
      <Link className="navbarLink" to="/payment">
        <button className={classnames('navbarButton', location === '/payment' ? 'current' : '')}>
          PAGAMENTO
        </button>
      </Link>
      <Link className="navbarLink" to="/success">
        <button className={classnames('navbarButton', location === '/success' ? 'current' : '')}>
          CONFIRMAÇÃO
        </button>
      </Link>
    </div>
  )
}

export { Navbar }
