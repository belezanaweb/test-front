import React from 'react'
import { Container, Active } from './styles'

const Header = () => {

  
  const path =  window.location.pathname;
  const ActiveTab = "#FF7800";
  const Inactive = "#ccc";  
   
  return (
    <Container>
     <ul>
       <li><Active color={path === "/" ? ActiveTab:Inactive}>Sacola</Active></li>
       <li><Active color={path.match('/payment') ? ActiveTab:Inactive}>Pagamento</Active></li>
       <li><Active color={path.match('/confirmation') ? ActiveTab:Inactive}>Confirmação</Active></li>
     </ul>

    </Container>
  )
}

export default Header
