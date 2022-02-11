import { createContext, ReactNode, useContext, useState, useRef, useEffect } from 'react';
import api from '../services/api';
import { Cart, CartItem } from '../interfaces/Cart';
import { BELEZA_NA_WEB_CART, BELEZA_NA_WEB_CART_ITEMS } from '../constants/local-storage';
import { getFromLocalStorage, setToLocalStorage } from '../helpers/local-storage';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productSku: string;
  quantity: number;
}

interface CartContextData {
  cart: Cart;
  cartItems: CartItem[];
  addProduct: (productSku: string) => Promise<void>;
  // removeProduct: (productId: string) => void;
  // updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const currentCartItems = getFromLocalStorage(BELEZA_NA_WEB_CART_ITEMS);
  const currentCart = getFromLocalStorage(BELEZA_NA_WEB_CART);

  const [cartItems, setCartItems] = useState<CartItem[]>(currentCartItems || []);
  const [cart, setCart] = useState<Cart>(currentCart || {});

  const prevCartRef = useRef<CartItem[]>();

  useEffect(() => {
    prevCartRef.current = cartItems;
  });

  const cartPreviousValue = prevCartRef.current ?? cartItems;

  useEffect(() => {
    if (cartPreviousValue !== cartItems) setToLocalStorage(BELEZA_NA_WEB_CART, cartItems);
  }, [cartPreviousValue, cartItems]);

  const getCart = async () => {
    const response = await api.get<Cart>('5b15c4923100004a006f3c07');
    setCart(response.data);
  };

  const addProduct = async (productSku: string) => {
    try {
      const updatedCartItems = [...cartItems];

      const itemAlreadyInCart = updatedCartItems.find((item) => item.product.sku === productSku);
      const quantitySum = itemAlreadyInCart ? itemAlreadyInCart.quantity : 0;
      const currentItemQuantity = quantitySum + 1;

      // se for chegar no limite do estoque
      if (currentItemQuantity > 8) {
        alert('Quantidade solicitada fora de estoque');
        return;
      }

      // soma mais 1 no item que já está no carrinho
      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity = quantitySum + 1;
      }

      // armazena novo produto no carrinho
      else {
        const { data } = await api.get('5b15c4923100004a006f3c07');
        const newItem = data.items.find((item: CartItem) => item.product.sku === productSku);
        updatedCartItems.push(newItem);
      }

      setCartItems(updatedCartItems);
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
  //     const itemAlreadyInCart = updatedCart.find((product) => product.sku === productId);

  //     if (itemAlreadyInCart) {
  //       itemAlreadyInCart.priceSpecification.price = amount;
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
        cartItems,
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
