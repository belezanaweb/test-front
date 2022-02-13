import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { Container } from './styles';
import { useCart } from '../../../../hooks/useCart';
import {
  NAV_TITLE_CART,
  NAV_TITLE_PAYMENT,
  NAV_TITLE_CONFIRMATION
} from '../../../../constants/navigation';

export default function Header() {
  const navItems = [
    {
      title: 'Ver Produtos',
      url: '/'
    },
    {
      title: NAV_TITLE_CART,
      url: '/cart'
    },
    {
      title: NAV_TITLE_PAYMENT,
      url: '/cart/payment'
    },
    {
      title: NAV_TITLE_CONFIRMATION,
      url: '/cart/confirmation'
    }
  ];

  const [optionSelected, setOptionSelected] = useState<string>();
  const { cartItems, creditCardInfo, isPurchaseConfirm } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case '/cart':
        setOptionSelected(NAV_TITLE_CART);
        break;
      case '/cart/payment':
        setOptionSelected(NAV_TITLE_PAYMENT);
        break;
      case '/cart/confirmation':
        setOptionSelected(NAV_TITLE_CONFIRMATION);
        break;
      default:
        setOptionSelected(NAV_TITLE_CART);
        break;
    }
  }, [location]);

  function handleOptionSelected(item: any) {
    const { title, url } = item;

    if (title === NAV_TITLE_PAYMENT && cartItems?.length === 0) return;
    if (title === NAV_TITLE_CONFIRMATION) {
      if (isPurchaseConfirm) return;

      const { number, cvc, name, expiry } = creditCardInfo;
      if (!number || !cvc || !name || !expiry) return;
    }

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
