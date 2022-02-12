import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch
} from 'react';
import api from '../services/api';
import { Cart, CartItem } from '../interfaces/Cart';
import {
  BELEZA_NA_WEB_CART_ITEMS,
  BELEZA_NA_WEB_CREDIT_CARD,
  BELEZA_NA_WEB_SUM_INFO
} from '../constants/local-storage';
import {
  cleanLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '../helpers/local-storage';
import formatCurrency from '../helpers/formatCurrency';
import { Focused } from 'react-credit-cards';

interface CartProviderProps {
  children: ReactNode;
}
interface UpdateItemQuantity {
  productSku: string;
  quantity: number;
}
interface CreditCardInfo {
  cardNumber: string;
  titularName: string;
  validate: string;
  cvv: string;
  focused: Focused;
}
interface SumInfo {
  itemsSubTotalFormatted: string;
  itemsDiscountFormatted: string;
  itemsTotalFormatted: string;
  shippingTotalFormatterd: string;
}
interface CartContextData {
  allProducts: any;
  sumInfo: SumInfo;
  setSumInfo: Dispatch<SetStateAction<SumInfo>>;
  creditCardInfo: CreditCardInfo;
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo>>;
  cartItems: CartItem[];
  addProduct: (productSku: string) => Promise<void>;
  removeProduct: (productSku: string) => void;
  updateItemQuantity: ({ productSku, quantity }: UpdateItemQuantity) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const cartItemsFromLocalStorage = getFromLocalStorage(BELEZA_NA_WEB_CART_ITEMS);
  const sumInfoFromLocalStorage = getFromLocalStorage(BELEZA_NA_WEB_SUM_INFO);
  const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);

  const [allProducts, setAllProducts] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsFromLocalStorage || []);
  const [sumInfo, setSumInfo] = useState<SumInfo>(sumInfoFromLocalStorage || {});
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>(creditCardFromStorage || {});

  const prevCartRef = useRef<CartItem[]>();
  const cartPreviousValue = prevCartRef.current ?? cartItems;

  const stockquantity = 8;

  useEffect(() => {
    prevCartRef.current = cartItems;
  });

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>('5b15c4923100004a006f3c07');

      const all = response.data.items.map((item: CartItem) => {
        item.product.priceSpecification.price = formatCurrency(
          item.product.priceSpecification.price
        );

        const dataWrapper = {
          product: item.product,
          quantity: item.quantity
        };

        return dataWrapper;
      });

      setAllProducts(all);

      const shippingTotalFormatterd = formatCurrency(response.data.shippingTotal);
      setSumInfo({ ...sumInfo, shippingTotalFormatterd });
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (cartPreviousValue !== cartItems) {
      setToLocalStorage(BELEZA_NA_WEB_CART_ITEMS, cartItems);
    }
  }, [cartPreviousValue, cartItems]);

  const addProduct = async (productSku: string) => {
    try {
      const updatedCartItems = [...cartItems];

      const itemAlreadyInCart = updatedCartItems.find((item) => item.product.sku === productSku);
      const quantitySum = itemAlreadyInCart ? itemAlreadyInCart.quantity : 0;
      const currentItemQuantity = quantitySum + 1;

      // se for chegar no limite do estoque
      if (currentItemQuantity > stockquantity) {
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
      setSumInfoItems(updatedCartItems);
    } catch {
      alert('Erro na adição do produto');
    }
  };

  const updateItemQuantity = ({ productSku, quantity }: UpdateItemQuantity) => {
    try {
      if (quantity <= 0) return;

      if (quantity > stockquantity) {
        alert('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCartItems = [...cartItems];
      const itemAlreadyInCart = updatedCartItems.find((item) => item.product.sku === productSku);

      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity = quantity;

        setCartItems(updatedCartItems);
        setSumInfoItems(updatedCartItems);
      } else throw Error();
    } catch {
      alert('Erro na alteração de quantidade do produto');
    }
  };

  const removeProduct = (productSku: string) => {
    try {
      const updatedCartItems = [...cartItems];
      const productIndex = updatedCartItems.findIndex((item) => item.product.sku === productSku);

      if (productIndex >= 0) {
        updatedCartItems.splice(productIndex, 1);
        setCartItems(updatedCartItems);
        setSumInfoItems(updatedCartItems);

        if (updatedCartItems?.length === 0) cleanLocalStorage();
      }
      //
      else throw Error();
    } catch {
      alert('Erro na remoção do produto');
    }
  };

  const setSumInfoItems = (updatedCartItems: CartItem[]) => {
    const cartWithSubtotal = updatedCartItems.map((item) => ({
      ...item,
      subTotal: item.product.priceSpecification.price * item.quantity,
      discount: item.product.priceSpecification.discount
    }));

    let itemsSubTotal = 0;
    let itemsDiscount = 0;

    cartWithSubtotal.forEach((item) => {
      itemsDiscount += item.discount;
      itemsSubTotal += item.subTotal;
    });

    const itemsTotalFormatted = formatCurrency(itemsSubTotal - itemsDiscount);
    const itemsSubTotalFormatted = formatCurrency(itemsSubTotal);
    const itemsDiscountFormatted = formatCurrency(itemsDiscount);

    const sumInfoObject = {
      ...sumInfo,
      itemsSubTotalFormatted,
      itemsDiscountFormatted,
      itemsTotalFormatted
    };

    setSumInfo(sumInfoObject);
    setToLocalStorage(BELEZA_NA_WEB_SUM_INFO, sumInfoObject);
  };

  return (
    <CartContext.Provider
      value={{
        allProducts,
        sumInfo,
        setSumInfo,
        creditCardInfo,
        setCreditCardInfo,
        cartItems,
        addProduct,
        removeProduct,
        updateItemQuantity
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
