import React from 'react'
import { Nav } from './styles'
import { CustomNavItem } from './CustomNavItem'

export const NavBar = () => {
  return (
    <Nav>
      <CustomNavItem pageName="/" text={'Sacola'}></CustomNavItem>
      <CustomNavItem pageName="/payment" text={'Pagamento'}></CustomNavItem>
      <CustomNavItem pageName="/confirmation" text={'Confirmação'}></CustomNavItem>
    </Nav>
  )
}
