import React, { Component } from 'react'
import { Navbar } from '../css/styles'

class CustomNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <li>
            <a href="#">Sacola</a>
          </li>
          <li>
            <a href="#">Pagamento</a>
          </li>
          <li>
            <a href="#">Confirmação</a>
          </li>
        </Navbar>
      </div>
    )
  }
}

export default CustomNavBar
