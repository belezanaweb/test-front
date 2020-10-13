import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: '#FF7800',
  };
  return (
    <div>
      <nav>
        <ul className="navmenu">
          <li className="navitem">
            <NavLink to="sacola" activeStyle={activeStyle}>
              Sacola
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink to="pagamento" activeStyle={activeStyle}>
              Pagamento
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink to="confirmacao" activeStyle={activeStyle}>
              Confirmação
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
