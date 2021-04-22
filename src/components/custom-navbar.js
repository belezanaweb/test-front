import React, { Component } from 'react'
import { Navbar } from '../css/styles'

class CustomNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_page: ''
    }
  }

  render() {
    let classCart = this.props.current_page === 'cart' ? 'active' : ''
    let classPayment = this.props.current_page === 'payment' ? 'active' : ''
    let classConfirmation = this.props.current_page === 'confirmation' ? 'active' : ''

    return (
      <div>
        <Navbar>
          <li className={classCart}>Sacola</li>
          <li className={classPayment}>Pagamento</li>
          <li className={classConfirmation}>Confirmação</li>
        </Navbar>
      </div>
    )
  }
}

export default CustomNavBar
