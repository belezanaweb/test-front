import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeadWrapper, Nav, StepList, Step } from './style'

function Header() {
  return (
    <HeadWrapper>
      <Nav>
        <StepList>
          <Step>
            <NavLink className="nav-item" activeClassName="active" to="/cart">
              Sacola
            </NavLink>
          </Step>
          <Step>
            <NavLink className="nav-item" activeClassName="active" to="/payment">
              Pagamento
            </NavLink>
          </Step>
          <Step>
   
            <NavLink className="nav-item" activeClassName="active" to="/order-placed">
              Confirmação
            </NavLink>
          
          </Step>
        </StepList>
      </Nav>
    </HeadWrapper>
  )
}

export default Header

