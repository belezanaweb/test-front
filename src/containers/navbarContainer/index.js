import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbarButton" to="/">
        <button className="navbarButton">SACOLA</button>
      </Link>
      <Link className="navbarButton" to="/payment">
        <button className="navbarButton">PAGAMENTO</button>
      </Link>
      <Link className="navbarButton" to="/confirm">
        <button className="navbarButton">CONFIRMAÇÃO</button>
      </Link>
    </div>
  )
}
