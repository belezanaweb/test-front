import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { CartItemList } from './CartItemList';
import CartItem from '../CartItem/CartItem';

configure({ adapter: new Adapter() });

it('should render the cart items', () => {

  const product = () => ({
    "product": {
      "sku": Math.round(Math.random() * 1000), // The sku property is used as reference key, so it should be unique
      "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
      "imageObjects": [
        {
          "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
          "valid": true
        }
      ],
      "priceSpecification": {
        "price": 225.9,
      }
    }
  })

  let wrapper = mount(
    <CartItemList items={[product()]} />
  );

  expect(wrapper.find(CartItem)).toHaveLength(1)

  wrapper = mount(
    <CartItemList items={[product(), product(), product()]} />
  );

  expect(wrapper.find(CartItem)).toHaveLength(3)

  wrapper = mount(
    <CartItemList items={[product(), product()]} />
  );

  expect(wrapper.find(CartItem)).toHaveLength(2)
})
