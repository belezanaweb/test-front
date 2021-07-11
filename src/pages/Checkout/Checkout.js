import React from 'react'
import { NavBar } from '../../components/NavBar'

const Checkout = (props) => {
  return (
    <>
      <NavBar pathname={props.location.pathname} />
      <div>Checkout Page</div>
    </>
  )
}

export default Checkout
