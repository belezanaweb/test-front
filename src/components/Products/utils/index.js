export const normalizeCartData = data => {
  return data.items.reduce((acc, curr) => {
    const formattedProduct = {
      imageUrl: curr.product.imageObjects[0].small,
      productName: curr.product.name,
      price: curr.product.priceSpecification.price,
      maxPrice: curr.product.priceSpecification.maxPrice,
    };

    return [...acc, formattedProduct];
  }, []);
};
