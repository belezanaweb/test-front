
import { useEffect } from 'react';
import { Basket } from '../types'
import { create } from 'zustand'
import config from '../../../config/json/config.json';

export type BasketResponse = {
  basket: Basket | null,
  fetch: Function
}

export const useBasket = create<BasketResponse>(set => ({
  basket: null,
  fetch: async () => {
    const response = await fetch(config.ENDPOINT_BASKET);
    set({ basket: await response.json() as Basket })
  },
}))


export const useFetchBasket=  () => {
  const { basket, fetch } = useBasket();
  useEffect(() => {
      if(!basket) {
          fetch()
      }
  },[]);
  return basket;
}