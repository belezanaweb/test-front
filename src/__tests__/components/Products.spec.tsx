import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import MockAdapter from 'axios-mock-adapter';

import api from 'services/api';
import { ResumeProvider } from 'context/resume';

import Cart from 'pages/Cart';

const apiMock = new MockAdapter(api);

jest.mock('hooks/price', () => {
  return {
    usePrice: () => ({
      formatPrice: () => '99,90'
    }),
  }
});

describe('Product Component', () => {
  it('sould be able to render products on cart', async () => {
    apiMock.onGet('5b15c4923100004a006f3c07').reply(200, {
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
      ]
    });

    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Route component={Cart} />
      </Router>, {
        wrapper: ResumeProvider
      }
    );

    await waitFor(() => {
      const productContainer = getByTestId('product-container');

      expect(productContainer.children).toHaveLength(1);
    });
  });
});
