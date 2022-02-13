import AxiosMock from 'axios-mock-adapter';
import { waitFor, render, fireEvent } from '@testing-library/react';

import api from '../../services/api';
import { cartMock } from '../../mocks/cart-mock';
import Home from '../../pages/Home';
import { useCart } from '../../hooks/useCart';

const apiMock = new AxiosMock(api);
const mockedAddProduct = jest.fn();
const mockedUseCartHook = useCart as jest.Mock;

jest.mock('../../hooks/useCart');

describe('Home Page', () => {
  beforeAll(() => {
    apiMock.onGet('5b15c4923100004a006f3c07').reply(200, cartMock);
  });

  beforeEach(() => {
    mockedUseCartHook.mockReturnValue({
      cart: [
        {
          quantity: 2,
          product: {
            sku: '24410',
            name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
            imageObjects: [
              {
                small:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                medium:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              }
            ],
            priceSpecification: {
              sku: '24410',
              price: 225.9,
              discount: 18
            }
          }
        },
        {
          quantity: 1,
          product: {
            sku: '38273',
            name: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
            imageObjects: [
              {
                small:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
                medium:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg'
              }
            ],
            priceSpecification: {
              sku: '38273',
              price: 299,
              discount: 0
            }
          }
        }
      ],
      addProduct: mockedAddProduct
    });
  });

  it('should be able to add a product to cart', async () => {
    const { getAllByTestId, rerender } = render(<Home />);

    await waitFor(() => getAllByTestId('add-item-button'), { timeout: 200 });
    const [addFirstProduct] = getAllByTestId('add-item-button');

    fireEvent.click(addFirstProduct);
    expect(mockedAddProduct).toHaveBeenCalledWith(1);

    mockedUseCartHook.mockReturnValueOnce({
      cart: [
        {
          quantity: 2,
          product: {
            sku: '24410',
            name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
            imageObjects: [
              {
                small:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
                medium:
                  'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
              }
            ],
            priceSpecification: {
              sku: '24410',
              price: 225.9,
              discount: 18
            }
          }
        }
      ]
    });

    rerender(<Home />);

    const [firstItemInCartQuantity] = getAllByTestId('cart-item-quantity');
    expect(firstItemInCartQuantity).toHaveTextContent('3');
  });

  // it('should be able to render each item quantity added to cart', async () => {
  //   const { getAllByTestId } = render(<Home />);

  //   await waitFor(() => getAllByTestId('cart-item-quantity'), { timeout: 200 });

  //   const [firstItemInCartQuantity, secondItemInCartQuantity, thirdItemInCartQuantity] =
  //     getAllByTestId('cart-item-quantity');

  //   expect(firstItemInCartQuantity).toHaveTextContent('2');
  //   expect(secondItemInCartQuantity).toHaveTextContent('1');
  //   expect(thirdItemInCartQuantity).toHaveTextContent('0');
  // });
});
