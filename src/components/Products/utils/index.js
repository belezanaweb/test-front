export const normalizeProductData = data => {
  return data.items.reduce((acc, curr) => {
    const formattedProduct = {
      imageUrl: curr.product.imageObjects[0].small,
      productName: curr.product.name,
      price: curr.product.priceSpecification.price.toFixed(2).replace('.', ','),
      maxPrice: curr.product.priceSpecification.maxPrice
        .toFixed(2)
        .replace('.', ','),
    };

    return [...acc, formattedProduct];
  }, []);
};
