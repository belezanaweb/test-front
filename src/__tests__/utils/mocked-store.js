import configureStore from 'redux-mock-store';
import { middlewares } from '~/store';

export const initialStore = {
  loader: {
    show: false
  },
  cart: {
    items: [
      {
        quantity: 1,
        product: {
          sku: '24410',
          name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium",
          imageObjects: [
            {
              medium: 'medium image'
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
      },
      {
        quantity: 1,
        product: {
          sku: '38273',
          name: 'Good Girl Carolina Herrera Eau de Parfum',
          imageObjects: [
            {
              featured: true,
              medium: 'medium image'
            }
          ],
          priceSpecification: {
            sku: '38273',
            price: 299,
            originalPrice: 299,
            maxPrice: 299,
            percent: 0,
            discount: 0
          }
        }
      },
      {
        quantity: 1,
        product: {
          sku: '3019',
          name: 'Senscience Inner Restore Intensif',
          imageObjects: [
            {
              featured: true,
              medium: 'medium image'
            }
          ],
          priceSpecification: {
            sku: '3019',
            price: 99.9,
            originalPrice: 99.9,
            maxPrice: 99.9,
            percent: 0,
            discount: 0
          }
        }
      }
    ],
    subTotal: 624.8,
    shippingTotal: 5.3,
    discount: 30,
    total: 618.9
  },
  checkout: {
    card_number: '****.****.****.2222',
    card_holder_name: 'LUAN PEREIRA',
    card_expiration_date: '12/2021',
    card_cvv: '333'
  }
};

const createMockedStore = (initial = initialStore) => configureStore(middlewares())(initial);

export default createMockedStore;
