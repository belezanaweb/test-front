import { CartContextProps } from 'cart/useCartProvider';

export default jest.fn<Partial<CartContextProps>, any[], any>(() => ({
  creditCard: undefined,
  setCreditCard: jest.fn(),
  cart: undefined,
}));
