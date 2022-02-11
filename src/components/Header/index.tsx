import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from './styles';

export default function Header() {
  const navItems = [
    {
      title: 'sacola',
      url: '/cart'
    },
    {
      title: 'pagamento',
      url: '/cart/payment'
    },
    {
      title: 'confirmação',
      url: '/cart/confirmation'
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
