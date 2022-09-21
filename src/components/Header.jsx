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
      <div className="container-fluid d-flex justify-content-center bg-light shadow-sm pb-1 fixed-top">
        <Link to="/" className="text-decoration-none">
          <span className={`fs-3 px-2 fw-bold text-muted ${isCart ? 'focus' : ''}`}>Sacola</span>
        </Link>
        <span className={`fs-3 px-2 fw-bold text-muted ${isPayment ? 'focus' : ''}`}>
          Pagamento
        </span>
        <span className={`fs-3 px-2 fw-bold text-muted ${isSubmit ? 'focus' : ''}`}>
          Confirmação
        </span>
      </div>
    )
  }
}
