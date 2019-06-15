import React from 'react';
import { css } from 'aphrodite/no-important';
import { NavLink } from 'react-router-dom';

import DataStore from '../../common/DataStore';

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
    isSuccessLink: true,
  },
];

const Header = () => {

  const enableSuccess = DataStore.shared('enableSuccess');

  const onClick = (e) => {

    const { enabled } = enableSuccess;
    if (!enabled) e.preventDefault();

  };

  return (

    <div className={css(styles.container)}>
      <div className={css(styles.content)}>
        {
          menuItems.map(menuItem => (
            <NavLink
              key={menuItem.label}
              onClick={menuItem.isSuccessLink ? onClick : null}
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

};

export default Header;
