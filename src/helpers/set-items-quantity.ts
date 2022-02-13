interface CartItemsQuantity {
  [key: string]: number;
}

export default function setCartItemsQuantity(cartItems: any, productSku: any) {
  const itemsQuantity = cartItems?.reduce((itemsQuantity: any, item: any) => {
    const itemsQuantityObj = { ...itemsQuantity };
    itemsQuantityObj[item.product.sku] = item.quantity;

    return itemsQuantityObj;
  }, {} as CartItemsQuantity);

  const quantity = itemsQuantity ? itemsQuantity[productSku] : 0;

  return quantity;
}
