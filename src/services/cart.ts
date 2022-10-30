import axios from "axios";

export const getCartData = () => {
  return axios.get("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
};

export const finishPurchase = (values: unknown) => {
  return Promise.resolve();
};
