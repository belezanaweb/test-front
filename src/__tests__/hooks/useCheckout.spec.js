import { renderHook, act } from '@testing-library/react-hooks'
import { useCheckout, CheckoutProvider } from '../../hooks/useCheckout'

const initialStoragedDate = {
  id: '5b15c171e4b0023bb624f616',
  items: [
    {
      quantity: 1,
      product: {
        sku: '24410',
        name:
          "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
        imageObjects: [
          {
            featured: true,
            thumbnail:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            small:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            medium:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            large:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            extraLarge:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
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
  total: 618.9
}

describe('useCheckout', () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValueOnce(JSON.stringify(initialStoragedDate))
  })

  it('sould be able to initialize cart page with localStorage value', () => {
    const { result } = renderHook(useCheckout, {
      wrapper: CheckoutProvider
    })

    expect(result.current.data).toEqual(
      expect.objectContaining({
        id: '5b15c171e4b0023bb624f616',
        items: [
          {
            quantity: 1,
            product: {
              sku: '24410',
              name:
                "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
              imageObjects: [
                {
                  featured: true,
                  thumbnail:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                  small:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                  medium:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                  large:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                  extraLarge:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
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
        total: 618.9
      })
    )
  })
})
