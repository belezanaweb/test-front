import { Product } from '../../features/Checkout/types'

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const makeProductMock = (length: number): Product[] => {
  return new Array(length).fill(null).map((_, index) => {
    return {
      quantity: 1,
      product: {
        sku: `${Date.now() + index}`.slice(-5),
        name: `Nome do produto número ${index}`,
        imageObjects: [
          {
            featured: true,
            thumbnail: `https://teste.com/img-thumbnail-${index}.png`,
            small: `https://teste.com/img-small-${index}.png`,
            medium: `https://teste.com/img-medium-${index}.png`,
            large: `https://teste.com/img-large-${index}.png`,
            extraLarge: `https://teste.com/img-extraLarge-${index}.png`,
            valid: true
          }
        ],
        priceSpecification: {
          sku: `${Date.now() + index}`.slice(-5),
          price: getRandomArbitrary(100, 130),
          originalPrice: getRandomArbitrary(100, 130),
          maxPrice: getRandomArbitrary(130, 180),
          percent: 7,
          discount: 18
        }
      }
    }
  })
}