import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const { container, getByLabelText, getByPlaceholderText } = render(
      <Input
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
      />,
    );

    const labelElement = getByLabelText('Test Label');
    const inputElement = getByPlaceholderText('Test Placeholder');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display error message', () => {
    const { container, getByText } = render(
      <Input
        id="test-input"
        label="Test Label"
        placeholder="Test Placeholder"
        error="Error message"
      />,
    );

    const errorMessage = getByText('Error message');

    expect(errorMessage).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
