import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <span className="nav-link">Sacola</span>
          <span className="nav-link" href="#">
            Pagamento
          </span>
          <span className="nav-link" href="#">
            Confirmação
          </span>
        </nav>
      </div>
    )
  }
}
