import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarButton" to="/">
        <button className="navbarButton">SACOLA</button>
      </Link>
      <Link className="navbarButton" to="/payment">
        <button className="navbarButton">PAGAMENTO</button>
      </Link>
      <Link className="navbarButton" to="/success">
        <button className="navbarButton">CONFIRMAÇÃO</button>
      </Link>
    </div>
  )
}

export { Navbar }
