export const cartRequest = () => ({
  type: "CART_REQUEST"
});

export const cartSuccess = data => ({
  type: "CART_SUCCESS",
  payload: { data }
});
