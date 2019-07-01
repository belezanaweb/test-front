import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const linkStyle = {
      color: 'black',
      textDecoration: 'none',
      display: 'inline'
    }

    const nav = {
      textAlign: 'center',
      justifyContent: 'center'
    }
    return (
      <div>
        <nav className="nav" style={nav}>
          <Link to="/" style={linkStyle} className="nav-link">
            Sacola
          </Link>
          <Link to="/payment" style={linkStyle} className="nav-link" href="#">
            Pagamento
          </Link>
          <Link to="/request" style={linkStyle} className="nav-link" href="#">
            Confirmação
          </Link>
        </nav>
      </div>
    )
  }
}
