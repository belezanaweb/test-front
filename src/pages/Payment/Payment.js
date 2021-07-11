import React from 'react'
import { NavBar } from '../../components/NavBar'
import './Payment.css'

const Payment = (props) => {
  return (
    <>
      <NavBar pathname={props.location.pathname} />
      <div className="page-container">Payment Page</div>
    </>
  )
}

export default Payment
