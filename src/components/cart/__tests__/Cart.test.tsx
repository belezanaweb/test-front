import { render } from '@testing-library/react'
import { Cart } from '../Cart'

describe('Cart', () => {
  test('renders the cart with items', () => {
    const items = [
      {
        "quantity": 1,
        "product": {
          "sku": "123",
          "name": "Product 1",
          "imageObjects": [{
            "featured": true,
            "thumbnail": "image-url",
            "small": "image-url",
            "medium": "image-url",
            "large": "image-url",
            "extraLarge": "image-url",
            "valid": true
          }],
          "priceSpecification": {
            "sku": "123",
            "price": 8,
            "originalPrice": 8,
            "maxPrice": 10,
            "percent": 0,
            "discount": 0
          }
        }
      },
      {
        "quantity": 1,
        "product": {
          "sku": "456",
          "name": "Product 2",
          "imageObjects": [{
            "featured": true,
            "thumbnail": "image-url",
            "small": "image-url",
            "medium": "image-url",
            "large": "image-url",
            "extraLarge": "image-url",
            "valid": true
          }],
          "priceSpecification": {
            "sku": "456",
            "price": 15,
            "originalPrice": 15,
            "maxPrice": 20,
            "percent": 0,
            "discount": 0
          }
        }
      }
    ]

    const { getByText, getByAltText } = render(<Cart items={items} />)

    items.forEach((item) => {
      const nameElement = getByText(item.product.name)
      const priceElement = getByText(`R$ ${item.product.priceSpecification.price.toFixed(2).replace('.', ',')}`)
      const oldPriceElement = getByText(`R$ ${item.product.priceSpecification.maxPrice.toFixed(2).replace('.', ',')}`)

      expect(nameElement).toBeInTheDocument()
      expect(priceElement).toBeInTheDocument()
      expect(oldPriceElement).toBeInTheDocument()

      const imageElement = getByAltText(item.product.name)
      expect(imageElement).toBeInTheDocument()
      expect(imageElement.getAttribute('src')).toBe(item.product.imageObjects[0].thumbnail)
    })
  })
})
