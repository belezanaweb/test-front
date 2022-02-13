import AxiosMock from 'axios-mock-adapter';
import { waitFor, render, fireEvent } from '@testing-library/react';

import api from '../../services/api';
import Home from '../../pages/Home';
import { useCart } from '../../hooks/useCart';

const apiMock = new AxiosMock(api);
const mockedAddProduct = jest.fn();
const mockedUseCartHook = useCart as jest.Mock;

jest.mock('../../hooks/useCart');

describe('Home Page', () => {
  beforeAll(() => {
    apiMock.onGet('items').reply(200, [
      {
        quantity: 1,
        product: {
          sku: '24410',
          name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
          imageObjects: [
            {
              medium:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
            }
          ],
          priceSpecification: {
            sku: '24410',
            price: 225.9
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
              medium:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg'
            }
          ],
          priceSpecification: {
            sku: '38273',
            price: 299
          }
        }
      },
      {
        quantity: 1,
        product: {
          sku: '3019',
          name: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
          imageObjects: [
            {
              medium:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png'
            }
          ],
          priceSpecification: {
            sku: '3019',
            price: 99.9
          }
        }
      }
    ]);
  });

  beforeEach(() => {
    mockedUseCartHook.mockReturnValue({
      cart: [
        {
          amount: 2,
          id: 1,
          image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          price: 179.9,
          title: 'Tênis de Caminhada Leve Confortável'
        },
        {
          amount: 1,
          id: 2,
          image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          price: 139.9,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino'
        }
      ],
      addProduct: mockedAddProduct
    });
  });

  it('should be able to render each product quantity added to cart', async () => {
    const { getAllByTestId } = render(<Home />);

    await waitFor(() => getAllByTestId('cart-product-quantity'), {
      timeout: 200
    });

    const [firstProductCartQuantity, secondProductCartQuantity, thirdProductCartQuantity] =
      getAllByTestId('cart-product-quantity');

    expect(firstProductCartQuantity).toHaveTextContent('2');
    expect(secondProductCartQuantity).toHaveTextContent('1');
    expect(thirdProductCartQuantity).toHaveTextContent('0');
  });

  it('should be able to add a product to cart', async () => {
    const { getAllByTestId, rerender } = render(<Home />);

    await waitFor(() => getAllByTestId('add-product-button'), {
      timeout: 200
    });

    const [addFirstProduct] = getAllByTestId('add-product-button');

    fireEvent.click(addFirstProduct);

    expect(mockedAddProduct).toHaveBeenCalledWith(1);

    mockedUseCartHook.mockReturnValueOnce({
      cart: [
        {
          amount: 3,
          id: 1,
          image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          price: 179.9,
          title: 'Tênis de Caminhada Leve Confortável'
        }
      ]
    });

    rerender(<Home />);

    const [firstProductCartQuantity] = getAllByTestId('cart-product-quantity');

    expect(firstProductCartQuantity).toHaveTextContent('3');
  });
});
