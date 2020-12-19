import { FILL_SALE } from "./actionTypes";

export const fillSale = value => ({
  type: FILL_SALE,
  sale: value
});
