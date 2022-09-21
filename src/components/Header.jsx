import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default class Header extends React.Component {
  state = {
    isCart: false,
    isPayment: false,
    isSubmit: false
  }
  componentDidMount() {
    this.setColor()
  }
  setColor = () => {
    if (window.location.pathname === '/') {
      this.setState({
        isCart: true,
        isPayment: false,
        isSubmit: false
      })
    }

    if (window.location.pathname === '/payment') {
      this.setState({
        isCart: false,
        isPayment: true,
        isSubmit: false
      })
    }

    if (window.location.pathname === '/submit') {
      this.setState({
        isCart: false,
        isPayment: false,
        isSubmit: true
      })
    }
  }
  render() {
    const { isCart, isSubmit, isPayment } = this.state
    return (
      <div className="header-container">
        <Link to="/" className={`header-link ${isCart ? 'focus' : ''}`}>
          Sacola
        </Link>
        <Link to="/payment" className={`header-link ${isPayment ? 'focus' : ''}`}>
          Pagamento
        </Link>
        <span className={`header-link ${isSubmit ? 'focus' : ''}`}>Confirmação</span>
      </div>
    )
  }
}
