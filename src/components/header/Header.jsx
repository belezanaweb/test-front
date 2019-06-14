import React from 'react';
import { css } from 'aphrodite/no-important';
import { NavLink } from 'react-router-dom';

import styles from './styles';

const menuItems = [
  {
    label: 'SACOLA',
    link: '/sacola',
  },
  {
    label: 'PAGAMENTO',
    link: '/pagamento',
  },
  {
    label: 'CONFIRMAÇÃO',
    link: '/sucesso',
  },
];

const Header = () => (

  <div className={css(styles.container)}>
    <div className={css(styles.content)}>
      {
        menuItems.map(menuItem => (
          <NavLink
            key={menuItem.label}
            to={menuItem.link}
            className={css(styles.link)}
            activeStyle={{ color: '#FF7800' }}
          >
            {menuItem.label}
          </NavLink>
        ))
      }
    </div>
  </div>

);

export default Header;
