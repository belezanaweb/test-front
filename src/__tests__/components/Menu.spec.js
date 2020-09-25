import React from 'react';

import Menu from '~/components/Menu';

const links = [
  {
    title: 'Sacola',
    path: '/'
  },
  {
    title: 'Pagamento',
    path: '/pagamento'
  },
  {
    title: 'Confirmação',
    path: '/confirmacao'
  }
];

describe('Menu Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Menu, {
      children: links.map(({ title, path }, index) => (
        <a key={path} href={path} className={index === 0 && 'active'}>
          {title}
        </a>
      ))
    });

    expect(wrapper).toMatchSnapshot();
  });
});
