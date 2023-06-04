export const normalizeCartData = data => {
  return {
    productsQuantity: data.items.length,
    subTotal: data.subTotal.toFixed(2).replace('.', ','),
    shipping: data.shippingTotal.toFixed(2).replace('.', ','),
    discount: data.discount.toFixed(2).replace('.', ','),
    total: data.total.toFixed(2).replace('.', ','),
  };
};
