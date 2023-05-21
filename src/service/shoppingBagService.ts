type ItemShoppingBagResponse = {
  quantity: number,
  product: {
    sku: string,
    name: string,
    imageObjects: {
      featured: boolean,
      thumbnail: string,
      small: string,
      medium: string,
      large: string,
      extraLarge: string,
      valid: boolean
    }[],
    priceSpecification: {
      sku: string,
      price: number,
      originalPrice: number,
      maxPrice: number,
      percent: number,
      discount: number
    }
  }
}

type ShoppingBagResponse = {
  id: string,
  items: ItemShoppingBagResponse[],
  subTotal: number,
  shippingTotal: number,
  discount: number,
  total: number
}

export type ItemShoppingBagFormated = {
  quantity: number,
  sku: string,
  name: string,
  originalPrice: string,
  maxPrice: string,
  images: { 
    thumbnail: string,
    small: string,
    medium: string,
    large: string,
    extraLarge: string,
  }
}

export type CartShopFormated = {
  id: string,
  items: ItemShoppingBagFormated[],
  subTotal: string,
  shippingTotal: string,
  discount: string,
  total: string
  totalItens: number
}

function formatMoney(value: number): string {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function countItens(itensResponse: ItemShoppingBagResponse[]): number {
  const quantityInitial = 0
  return itensResponse.reduce((accumulator, item) => accumulator + item.quantity, quantityInitial)
}

function formatedItem(itemResponse: ItemShoppingBagResponse): ItemShoppingBagFormated {
  const item: ItemShoppingBagFormated = {
    quantity: itemResponse.quantity,
    sku: itemResponse.product.sku,
    name: itemResponse.product.name,
    originalPrice: formatMoney(itemResponse.product.priceSpecification.originalPrice),
    maxPrice: formatMoney(itemResponse.product.priceSpecification.maxPrice),
    images: {
      thumbnail: itemResponse.product.imageObjects[0].thumbnail,
      small: itemResponse.product.imageObjects[0].small,
      medium: itemResponse.product.imageObjects[0].medium,
      large: itemResponse.product.imageObjects[0].large,
      extraLarge: itemResponse.product.imageObjects[0].extraLarge,
    },
  }
  return item
}

export function formatShoppingBagServiceData(data: ShoppingBagResponse): CartShopFormated {
  const cartShopFormated: CartShopFormated = {
    id: data.id,
    items: data.items.map(item => formatedItem(item)),
    subTotal: formatMoney(data.subTotal),
    shippingTotal: formatMoney(data.shippingTotal),
    discount: formatMoney(data.discount),
    total: formatMoney(data.total),
    totalItens: countItens(data.items)
  }
  return cartShopFormated
}