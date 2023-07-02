import { create } from 'zustand'
import { productProps } from '../components/ProductsList/Product'
import { cartProducts } from '../queries/cartQueries'

interface BagState {
  bag: cartProducts;
  addProductsToBag: (products: cartProducts) => void;
  clearBag: () => void;
}

const useBagStore =
  create <
  BagState >
  ((set) => ({
    bag: { items: [], discount: 0, shippingTotal: 0, subTotal: 0, total: 0 },
    addProductsToBag: (products) => {
      set(() => ({ bag: products }))
    },
    clearBag: () => {
      set(() => ({ bag: { items: [], discount: 0, shippingTotal: 0, subTotal: 0, total: 0 } }))
    }
  }))

export default useBagStore
