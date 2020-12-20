import React from 'react'
import NavbarDOM, { NavbarItem } from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const links = {
  '/': 'sacola',
  '/payment': 'pagamento',
  '/checkout': 'confirmação'
}

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <NavbarDOM>
      {Object.entries(links).map(([path, name], key) => (
        <NavbarItem to={path} active={path === pathname} key={key}>
          {name}
        </NavbarItem>
      ))}
    </NavbarDOM>
  )
}

export default Navbar
