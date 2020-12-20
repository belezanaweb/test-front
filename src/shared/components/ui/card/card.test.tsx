import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Card from './index';

const mock = {
  title: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
  price: "R$ 225,90",
  image:
    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
}

describe('<Card />', () => {
  it('should render component with <article> tag', () => {
    render(<Card {...mock} />, {});
    expect(screen.getByRole('article'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Card {...mock} />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})
