import { BagProductResponse } from '../../services/bag-products/bag-products.services.types'

export const MOCK_BAG: BagProductResponse = {
  items: [
    {
      product: {
        sku: '123',
        name: 'Produto 1',
        imageObjects: [
          {
            small: 'img1.jpg',
            thumbnail: '',
            medium: '',
            large: '',
            extraLarge: ''
          }
        ],
        price: 10,
        maxPrice: 20,
        slugName: ''
      },
      quantity: 1,
      discount: 0,
      total: 0,
      subTotal: 0
    },
    {
      product: {
        sku: '456',
        name: 'Produto 2',
        imageObjects: [
          {
            small: 'img2.jpg',
            thumbnail: '',
            medium: '',
            large: '',
            extraLarge: ''
          }
        ],
        price: 15,
        maxPrice: 15,
        slugName: ''
      },
      quantity: 2,
      discount: 0,
      total: 0,
      subTotal: 0
    }
  ],
  id: '',
  totalWithoutFreight: 0,
  discount: 0,
  total: 0,
  shippingTotal: 0
}
