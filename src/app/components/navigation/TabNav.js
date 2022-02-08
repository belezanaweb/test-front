import React from 'react'
import { ContainerTabNav } from './TabNav.style'
import { NavLink } from 'react-router-dom'
const TabNav = () => {
  return (
    <ContainerTabNav>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#FF7800' : '#CCC'
              })}
              to="/cart"
            >
              SACOLA
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#FF7800' : '#CCC'
              })}
              to="/checkout"
            >
              PAGAMENTO
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#FF7800' : '#CCC'
              })}
              to="/wow-moment"
            >
              CONFIRMAÇÃO
            </NavLink>
          </li>
        </ul>
      </nav>
    </ContainerTabNav>
  )
}

export default TabNav
