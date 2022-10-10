import { useCallback, useState, useEffect, createContext } from 'react';
import { getCart } from 'api';

/**
 * @type {import('react').Context<{
 *   isLoading: boolean;
 *   confirmation?: {
 *     cardNumber: string;
 *     name: string;
 *     date: string;
 *     cvv: number;
 *   }
 *   setConfirmation: import('react').Dispatch<(prevState: undefined) => undefined>
 *   cart?: import('api').Cart;
 * }>}
 */
const CartContext = createContext({ isLoading: false, cart: undefined });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [confirmation, setConfirmation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    try {
      const cart = await getCart();

      setCart(cart);
    } catch (error) {
      //TODO: Implement error prompt
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!cart) {
      fetchCart();
    }
  }, [fetchCart, cart]);

  return (
    <CartContext.Provider value={{ isLoading, cart, confirmation, setConfirmation }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
