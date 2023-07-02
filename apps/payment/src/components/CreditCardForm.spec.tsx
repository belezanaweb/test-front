import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import CreditCardForm from './CreditCardForm';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('CreditCardForm', () => {
  it('should render the form fields correctly', () => {
    const { container } = render(<CreditCardForm />);

    expect(screen.getByLabelText('Número')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Nome do titular do cartão'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Data de validade')).toBeInTheDocument();
    expect(screen.getByLabelText('Código CVV:')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should form initialize with empty values, empty errors and 'disabled' submit button", () => {
    render(<CreditCardForm />);

    expect(screen.getByLabelText('Número')).toHaveValue('');
    expect(screen.getByLabelText('Nome do titular do cartão')).toHaveValue('');
    expect(screen.getByLabelText('Data de validade')).toHaveValue('');
    expect(screen.getByLabelText('Código CVV:')).toHaveValue('');

    expect(screen.queryAllByText(/span/i).length).toBe(0);

    expect(
      screen.getByRole('button', { name: /Finalizar pedido/i }),
    ).toBeDisabled();
  });

  it('should form validate the fields correctly', async () => {
    const { container } = render(<CreditCardForm />);

    fireEvent.change(screen.getByLabelText('Número'), {
      target: { value: '1234567890123456' },
    });
    fireEvent.change(screen.getByLabelText('Nome do titular do cartão'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Data de validade'), {
      target: { value: '12/24' },
    });
    fireEvent.change(screen.getByLabelText('Código CVV:'), {
      target: { value: '13' },
    });

    await waitFor(() => {
      expect(
        screen.getByText('O número do cartão é inválido.'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('O nome do titular é inválido.'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('A data de validade é inválida.'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('O código de segurança é inválido.'),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByRole('button', { name: /Finalizar pedido/i }),
    ).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: /Finalizar pedido/i }));
    expect(mockedUsedNavigate).not.toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.change(screen.getByLabelText('Número'), {
      target: { value: '4444333322221111' },
    });
    fireEvent.change(screen.getByLabelText('Nome do titular do cartão'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Data de validade'), {
      target: { value: '12/2024' },
    });
    fireEvent.change(screen.getByLabelText('Código CVV:'), {
      target: { value: '123' },
    });

    await waitFor(() => {
      expect(
        screen.queryByText('O número do cartão é inválido.'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('O nome do titular é inválido.'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('A data de validade é inválida.'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('O código de segurança é inválido.'),
      ).not.toBeInTheDocument();
    });

    expect(
      screen.getByRole('button', { name: /Finalizar pedido/i }),
    ).not.toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: /Finalizar pedido/i }));

    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot();
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/information');
      expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
