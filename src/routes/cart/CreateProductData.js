export const formatPrice = (price) => price.toFixed(2)

export function getTotalValues(items) {
  let totalProdutos = 0
  let totalFrete = 0
  let totalDiscount = 0

  for (const item of items) {
    if (item.product.priceSpecification) {
      totalProdutos += item.product.priceSpecification.price
      totalFrete +=
        item.product.priceSpecification.originalPrice - item.product.priceSpecification.price
      totalDiscount += item.product.priceSpecification.discount
    }
  }
  return { totalProdutos, totalFrete, totalDiscount }
}

export function getProductPrice(item) {
  return item.product.priceSpecification && formatPrice(item.product.priceSpecification.price)
}

export function getProductName(item) {
  return item.product.name
}

export function getImageSrc(item) {
  return item.product.imageObjects && item.product.imageObjects[0].small
}
