import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { StorageContext } from '../../contexts/StorageContext';

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

  const [optionSelected, setOptionSelected] = useState<string>();

  const { cartItems, creditCardInfo } = useContext(StorageContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case '/cart':
        setOptionSelected('sacola');
        break;
      case '/cart/payment':
        setOptionSelected('pagamento');
        break;
      case '/cart/confirmation':
        setOptionSelected('confirmação');
        break;
      default:
        setOptionSelected('CART');
        break;
    }
  }, [location]);

  function handleOptionSelected(item: any) {
    const { title, url } = item;
    if (title === 'confirmação' && !creditCardInfo) return;

    navigate(url, { replace: true });
    setOptionSelected(item);
  }

  return (
    <Container>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.title}
            className={optionSelected === item.title ? 'active' : ''}
            onClick={() => handleOptionSelected(item)}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </Container>
  );
}
