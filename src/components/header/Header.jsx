import React from 'react';
import { css } from 'aphrodite/no-important';
import { NavLink } from 'react-router-dom';

import DataStore from '../common/dataStore/DataStore';

import styles from './styles';

import logo from '../../assets/images/logo.svg';

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
        <div className={css(styles.logo)}>
          <img
            src={logo}
            alt="Beleza na Web"
          />
        </div>
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
