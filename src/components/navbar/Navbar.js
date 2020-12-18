import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

const Navbar = () => (
  <nav className={style.navbar}>
    <ul>
      <li className={style.active}>
        <Link to="/">Sacola</Link>
      </li>
      <li>
        <Link to="/payment">Pagamento</Link>
      </li>
      <li>
        <Link to="/confirmation">Confirmação</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
