import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

export default function useCartProvider() {
  const context = useContext(CartContext);

  if (Object.keys(context).length === 0) {
    throw new Error('useCartProvider must be used within an CartProvider');
  }

  return context;
}
