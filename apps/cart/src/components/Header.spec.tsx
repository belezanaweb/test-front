import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render the header correctly with active tab is cart', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/cart']}>
        <Header />
      </MemoryRouter>,
    );

    const sacolaTab = getByText('Sacola');
    const pagamentoTab = getByText('Pagamento');
    const confirmacaoTab = getByText('Confirmação');

    expect(sacolaTab).toHaveClass('text-black', 'mt-1');
    expect(pagamentoTab).not.toHaveClass('text-black', 'mt-1');
    expect(confirmacaoTab).not.toHaveClass('text-black', 'mt-1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the header correctly with active tab is payment', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/payment']}>
        <Header />
      </MemoryRouter>,
    );

    const sacolaTab = getByText('Sacola');
    const pagamentoTab = getByText('Pagamento');
    const confirmacaoTab = getByText('Confirmação');

    expect(sacolaTab).not.toHaveClass('text-black', 'mt-1');
    expect(pagamentoTab).toHaveClass('text-black', 'mt-1');
    expect(confirmacaoTab).not.toHaveClass('text-black', 'mt-1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the header correctly with active tab is information', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/information']}>
        <Header />
      </MemoryRouter>,
    );

    const sacolaTab = getByText('Sacola');
    const pagamentoTab = getByText('Pagamento');
    const confirmacaoTab = getByText('Confirmação');

    expect(sacolaTab).not.toHaveClass('text-black', 'mt-1');
    expect(pagamentoTab).not.toHaveClass('text-black', 'mt-1');
    expect(confirmacaoTab).toHaveClass('text-black', 'mt-1');
    expect(container.firstChild).toMatchSnapshot();
  });
});
