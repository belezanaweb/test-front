import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import './navbarContainer.css'

const Navbar = () => {
  const location = useLocation().pathname

  return (
    <div className="navbar">
      <Link id="cart-link" className="navbarLink" to="/">
        <button className={classnames('navbarButton', location === '/' ? 'current' : '')}>
          SACOLA
        </button>
      </Link>
      <Link id="payment-link" className="navbarLink" to="/payment">
        <button className={classnames('navbarButton', location === '/payment' ? 'current' : '')}>
          PAGAMENTO
        </button>
      </Link>
      <Link id="success-link" className="navbarLink" to="/success">
        <button className={classnames('navbarButton', location === '/success' ? 'current' : '')}>
          CONFIRMAÇÃO
        </button>
      </Link>
    </div>
  )
}

export { Navbar }
