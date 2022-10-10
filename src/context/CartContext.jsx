import { useCallback, useState, useEffect, createContext } from 'react';
import { getCart } from 'api';

/**
 * @type {import('react').Context<{
 *   isLoading: boolean;
 *   cart?: import('api').Cart;
 * }>}
 */
const CartContext = createContext({ isLoading: false, cart: undefined });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
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

  return <CartContext.Provider value={{ isLoading, cart: cart }}>{children}</CartContext.Provider>;
};

export default CartContext;
