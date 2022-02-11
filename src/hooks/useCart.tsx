import { createContext, ReactNode, useContext, useState, useRef, useEffect } from 'react';
import api from '../services/api';
import { Cart, CartItem, Product, Stock } from '../interfaces/Cart';
import { BELEZA_NA_WEB_CART } from '../constants/local-storage';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productSku: string;
  quantity: number;
}

interface CartContextData {
  cart: Cart;
  addProduct: (productSku: string) => Promise<void>;
  // removeProduct: (productId: string) => void;
  // updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Cart>(getInfoFromLocalStorage());

  function getInfoFromLocalStorage() {
    const storagedCart = localStorage.getItem(BELEZA_NA_WEB_CART);
    if (storagedCart) return JSON.parse(storagedCart);

    return [];
  }

  const prevCartRef = useRef<Cart>();

  useEffect(() => {
    prevCartRef.current = cart;
  });

  const cartPreviousValue = prevCartRef.current ?? cart;

  useEffect(() => {
    if (cartPreviousValue !== cart) localStorage.setItem(BELEZA_NA_WEB_CART, JSON.stringify(cart));
  }, [cartPreviousValue, cart]);

  const addProduct = async (productSku: string) => {
    try {
      const updatedCart = { ...cart };

      const productExists = updatedCart.items.find((item) => item.product.sku === productSku);

      const stockQuantity = 3;

      const itemQuantity = productExists ? productExists?.quantity : 0;

      const quantity = itemQuantity + 1;

      if (quantity > stockQuantity) {
        alert('Quantidade solicitada fora de estoque');
        return;
      }

      if (productExists) productExists.quantity = quantity;
      else {
        const item = await api.get(`/5b15c4923100004a006f3c07/${productSku}`);

        const newProduct = {
          ...item.data,
          quantity: 1
        };

        updatedCart.items.push(newProduct);
      }

      setCart(updatedCart);
    } catch {
      alert('Erro na adição do produto');
    }
  };

  // const removeProduct = (productId: string) => {
  //   try {
  //     const updatedCart = [...cart];
  //     const productIndex = updatedCart.findIndex((product) => product.sku === productId);

  //     if (productIndex >= 0) {
  //       updatedCart.splice(productIndex, 1);
  //       setCart(updatedCart);
  //     } else throw Error();
  //   } catch {
  //     alert('Erro na remoção do produto');
  //   }
  // };

  // const updateProductAmount = async ({ productId, amount }: UpdateProductAmount) => {
  //   try {
  //     if (amount <= 0) return;

  //     const response = await api.get(`/stock/${productId}`);

  //     const stock: Stock = response.data;

  //     const stockAmount = stock.amount;

  //     if (amount > stockAmount) {
  //       alert('Quantidade solicitada fora de estoque');
  //       return;
  //     }

  //     const updatedCart = [...cart];
  //     const productExists = updatedCart.find((product) => product.sku === productId);

  //     if (productExists) {
  //       productExists.priceSpecification.price = amount;
  //       setCart(updatedCart);
  //     } else throw Error();
  //   } catch {
  //     alert('Erro na alteração de quantidade do produto');
  //   }
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct
        // removeProduct, updateProductAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
