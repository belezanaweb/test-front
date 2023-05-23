import { describe, it } from 'vitest'
import { formatShoppingBagServiceData, maskNumberCard } from './shoppingBagService'

describe('CartShopService', () => {
  describe('formatCartServiceData', () => {
    it('verify format of Cart Service data', () => {
      const data = {
        "id": "34534545345345345",
        "items": [
          {
            "quantity": 1,
            "product": {
              "sku": "24410",
              "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
              "imageObjects": [
                {
                  "featured": true,
                  "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                  "small": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                  "medium": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                  "large": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                  "extraLarge": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                  "valid": true
                }
              ],
              "priceSpecification": {
                "sku": "24410",
                "price": 225.9,
                "originalPrice": 225.9,
                "maxPrice": 243.9,
                "percent": 7,
                "discount": 18
              }
            }
          },
          {
            "quantity": 1,
            "product": {
              "sku": "38273",
              "name": "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
              "imageObjects": [
                {
                  "featured": true,
                  "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
                  "small": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
                  "medium": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
                  "large": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
                  "extraLarge": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
                  "valid": true
                }
              ],
              "priceSpecification": {
                "sku": "38273",
                "price": 299,
                "originalPrice": 299,
                "maxPrice": 299,
                "percent": 0,
                "discount": 0
              }
            }
          }
        ],
        "subTotal": 624.8,
        "shippingTotal": 5.3,
        "discount": 30,
        "total": 600.1
      }
      const dataFormated = {
        "id": "34534545345345345",
        "items": [
          {
            "quantity": 1,
            "sku": "24410",
            "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
            "originalPrice": "R$ 225,90",
            "maxPrice": "R$ 243,90",
            "images": {
              "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
              "small": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
              "medium": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
              "large": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
              "extraLarge": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            }
          },
          {
            "quantity": 1,
            "sku": "38273",
            "name": "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
            "originalPrice": "R$ 299,00",
            "maxPrice": "R$ 299,00",
            "images": {
              "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
              "small": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
              "medium": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
              "large": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
              "extraLarge": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg"
            }
          }
        ],
        "subTotal": "R$ 624,80",
        "shippingTotal": "R$ 5,30",
        "discount": "R$ 30,00",
        "total": "R$ 600,10",
        "totalItens": 2
      }
      const result = formatShoppingBagServiceData(data)
      expect(result).toEqual(dataFormated)
    })
  })

  describe('maskNumberCard', () => {
    it('Should return initial mask when string input have less 4 caracters', () => {
      const result = maskNumberCard('123')
      expect(result).toEqual('**** **** **** ')
    })

    it('Should return initial mask and last of 4 numbers when string input have more 4 caracters', () => {
      const result = maskNumberCard('12345')
      expect(result).toEqual('**** **** **** 2345')
    })
  })
})