import { SAVE_CARD, SAVE_SALE } from "./actionTypes";

export const saveSale = value => ({
  type: SAVE_SALE,
  sale: value
});


export const saveCard = value => ({
  type: SAVE_CARD,
  card: value
});
