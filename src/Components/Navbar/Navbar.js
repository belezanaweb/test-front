import React from 'react'
import { useLocation } from 'react-router-dom'

import { Navbar, Step } from './styles'
export default function Header() {
  const location = useLocation()
  var step = 1
  if (location.pathname === '/') {
    step = 1
  } else if (location.pathname === '/payment') {
    step = 2
  } else {
    step = 3
  }
  return (
    <Navbar>
      <div className="row">
        <div className="col-4">
          {' '}
          <Step current={step === 1}>SACOLA</Step>
        </div>
        <div className="col-4">
          {' '}
          <Step current={step === 2}>PAGAMENTO</Step>
        </div>
        <div className="col-4">
          {' '}
          <Step current={step === 3}>CONFIRMAÇÃO</Step>
        </div>
      </div>
    </Navbar>
  )
}
