
import React, { useEffect } from 'react';
import { Basket } from '../types'
import { create } from 'zustand'

export type BasketResponse = {
  basket: Basket | null,
  fetch: Function
}

export const useBasket = create<BasketResponse>((set, get) => ({
  basket: null,
  fetch: async () => {
    const response = await fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07');
    set({ basket: await response.json() as Basket })
  },
}))


export const useFetchBasket =  () => {
  const { basket, fetch } = useBasket();
  useEffect(() => {
      if(!basket) {
          fetch()
      }
  },[]);
}