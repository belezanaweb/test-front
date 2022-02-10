import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    navigate('/', { replace: true });
  }

  const navItems = [
    {
      title: 'sacola',
      url: '/cart'
    },
    {
      title: 'pagamento',
      url: '/payment'
    },
    {
      title: 'confirmação',
      url: '/confirmation'
    }
  ];

  return (
    <Container>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            className={({ isActive }) => (isActive ? 'red' : '')}
            to={item.url}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </Container>
  );
}
