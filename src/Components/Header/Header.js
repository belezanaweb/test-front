import React, { useContext } from 'react'

import DataContext from '../../Store/DataContext'
import './Header.css'

const Header = (props) => {
  const context = useContext(DataContext)
  const pay = context.state?.payments || []
  return (
    <div className="Header">
      <nav>
        <ul>
          <li onClick={() => props.onChangePage('Cart')}>SACOLA</li>
          <li onClick={() => props.onChangePage('Payment')}>PAGAMENTO</li>
          {pay.length === 0 ? (
            <li>CONFIRMAÇÃO</li>
          ) : (
            <li onClick={() => props.onChangePage('Checkout')}>CONFIRMAÇÃO</li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
