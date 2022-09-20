import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Sacola</Link>
        <Link to="/payment">Pagamento</Link>
        <Link to="/submit">Confirmação</Link>
      </>
    )
  }
}
