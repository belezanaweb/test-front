import React from 'react'
import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav>
      <div className="container">
        <span className={`container__span${props.pathname === '/' && '--selected'}`}>SACOLA</span>
        <span className={`container__span${props.pathname === '/payment' && '--selected'}`}>
          PAGAMENTO
        </span>
        <span className={`container__span${props.pathname === '/checkout' && '--selected'}`}>
          CONFIRMAÇÃO
        </span>
      </div>
    </nav>
  )
}

export default NavBar
