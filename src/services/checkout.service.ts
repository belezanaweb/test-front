export const checkoutService = async (): Promise<any> => {
  const data = await fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
    .then((response) => response.json())
    .then((data) => {
      let amountItems = 0
      const cart = {
        subTotal: data.subTotal,
        shippingTotal: data.shippingTotal,
        discount: data.discount,
        total: data.total,
        items: data.items.map((element: any) => {
          amountItems = amountItems + element.quantity
          return {
            product: {
              sku: element.product.sku,
              name: element.product.name,
              image: element.product.imageObjects[0].small,
              price: element.product.priceSpecification.price,
              maxPrice: element.product.priceSpecification.maxPrice
            }
          }
        }),
        amountItems: amountItems
      }

      return cart
    })
    .catch(() => {
      return null
    })

  return data
}
