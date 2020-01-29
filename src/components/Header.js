import React, {useState} from 'react';
import logobw from '../assets/logo_bw.svg'

import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap'

  import { Link } from 'react-router-dom'

const Header  = () =>{

  const [open, setOpen ] = useState(false)
  const toggle = () => {
    setOpen(!open);
  }


  return (
   <div className='headerBW'>
        <Navbar className='bg-black'  light expand='md'>
          <NavbarBrand  tag={Link} to='/' > <div><img  className="App-logo-icon" alt="Logo" src={logobw} /> </div> </NavbarBrand>

        </Navbar>

    </div>
  )


}

export default Header;
