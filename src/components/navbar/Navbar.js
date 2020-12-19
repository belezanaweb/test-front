import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './navbar.module.css'

const cx = classNames.bind(styles)

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={cx({ active: location.pathname === '/' })}>
          <Link to="/">Sacola</Link>
        </li>
        <li className={cx({ active: location.pathname === '/payment' })}>
          <Link to="/payment">Pagamento</Link>
        </li>
        <li className={cx({ active: location.pathname === '/confirmation' })}>
          <Link to="/confirmation">Confirmação</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
