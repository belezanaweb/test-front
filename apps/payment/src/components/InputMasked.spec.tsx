import { render, fireEvent } from '@testing-library/react';

import InputMasked from './InputMasked';

describe('InputMasked', () => {
  it('should render successfully', () => {
    const { getByLabelText } = render(
      <InputMasked
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        onChange={jest.fn}
      />,
    );

    const inputElement = getByLabelText('Test Label');

    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange correctly', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <InputMasked
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        onChange={handleChange}
      />,
    );

    const inputElement = getByLabelText('Test Label');

    fireEvent.change(inputElement, { target: { value: '123456' } });

    expect(handleChange).toHaveBeenCalledWith('123456');
  });

  it('should mask credit card number correctly', () => {
    const { getByLabelText } = render(
      <InputMasked
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        format="#### #### #### ####"
        onChange={jest.fn}
      />,
    );

    const inputElement = getByLabelText('Test Label');

    fireEvent.change(inputElement, {
      target: { value: '4444 3333 2222 1111' },
    });

    expect(inputElement).toHaveValue('4444 3333 2222 1111');

    fireEvent.change(inputElement, {
      target: { value: '4444 3333 2222 11112' },
    });

    expect(inputElement).toHaveValue('4444 3333 2222 1111');
  });

  it('should mask expire date correctly', () => {
    const { getByLabelText } = render(
      <InputMasked
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        format="##/####"
        mask={['M', 'M', 'Y', 'Y', 'Y', 'Y']}
        onChange={jest.fn}
      />,
    );

    const inputElement = getByLabelText('Test Label');

    fireEvent.change(inputElement, {
      target: { value: '122020' },
    });

    expect(inputElement).toHaveValue('12/2020');

    fireEvent.change(inputElement, {
      target: { value: '1220201' },
    });

    expect(inputElement).toHaveValue('12/2020');
  });

  it('should mask cvv correctly', () => {
    const { getByLabelText } = render(
      <InputMasked
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        format="###"
        onChange={jest.fn}
      />,
    );

    const inputElement = getByLabelText('Test Label');

    fireEvent.change(inputElement, {
      target: { value: '123' },
    });

    expect(inputElement).toHaveValue('123');

    fireEvent.change(inputElement, {
      target: { value: '1233' },
    });

    expect(inputElement).toHaveValue('123');
  });
});
