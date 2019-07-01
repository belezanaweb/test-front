import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const linkStyle = {
      color: 'gray',
      textDecoration: 'none',
      display: 'inline',
      fontSize: '15px'
    }

    const nav = {
      textAlign: 'center',
      justifyContent: 'center'
    }
    return (
      <div>
        <nav className="nav" style={nav}>
          <Link to="/" style={linkStyle} className="nav-link">
            SACOLA
          </Link>
          <Link to="/payment" style={linkStyle} className="nav-link" href="#">
            PAGAMENTO
          </Link>
          <Link to="/request" style={linkStyle} className="nav-link" href="#">
            CONFIRMAÇÂO
          </Link>
        </nav>
      </div>
    )
  }
}
