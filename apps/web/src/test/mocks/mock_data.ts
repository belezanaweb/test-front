import { CartModel } from '@/domain'

export const fakeCartModel: CartModel = {
  id: '123',
  items: [
    {
      quantity: 1,
      product: {
        sku: '24410',
        name: 'Test Product',
        imageObjects: [
          {
            featured: true,
            thumbnail: '',
            small: '',
            medium: '',
            large: '',
            extraLarge: '',
            valid: true
          }
        ],
        priceSpecification: {
          sku: '24410',
          price: 225.9,
          originalPrice: 225.9,
          maxPrice: 243.9,
          percent: 7,
          discount: 18
        }
      }
    }
  ],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 600.1
}
