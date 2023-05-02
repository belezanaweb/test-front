import '@testing-library/jest-dom/extend-expect'

console.error = () => {}

export const mockProduct: Product = {
  sku: 'sku',
  name: 'test',
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
    sku: 'sku',
    price: 10,
    originalPrice: 0,
    maxPrice: 11,
    percent: 0,
    discount: 1
  }
}

export const mockCart: Cart = {
  id: '',
  items: [],
  subTotal: 10,
  shippingTotal: 2,
  discount: 1,
  total: 12
}

export const mockFormState: PaymentState = {
  selectedPayment: 'card',
  options: {
    //other payment forms will have separated objects here
    card: {
      cardNumber: '',
      cardOwner: '',
      cardExpirationDate: '',
      cardSecurityCode: ''
    }
  },
  errorArray: []
}
