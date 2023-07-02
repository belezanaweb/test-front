import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render the button correctly with default props', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Button onClick={onClick}>Click me</Button>,
    );
    const button = getByText('Click me');

    expect(container.firstChild).toMatchSnapshot();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-purple-600', 'text-white');
    expect(button).not.toHaveClass('bg-black', 'text-white');
    expect(button).not.toHaveClass(
      'bg-gray-300',
      'text-gray-500',
      'cursor-not-allowed',
    );
    expect(button).not.toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render the button correctly with custom props', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Button color="secondary" onClick={onClick}>
        Click me
      </Button>,
    );
    const button = getByText('Click me');

    expect(container.firstChild).toMatchSnapshot();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-black', 'text-white');
    expect(button).not.toHaveClass('bg-purple-600', 'text-white');
    expect(button).not.toHaveClass(
      'bg-gray-300',
      'text-gray-500',
      'cursor-not-allowed',
    );
    expect(button).not.toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render the button correctly with disabled prop', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    );
    const button = getByText('Click me');

    expect(container.firstChild).toMatchSnapshot();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-gray-300',
      'text-gray-500',
      'cursor-not-allowed',
    );
    expect(button).not.toHaveClass('bg-purple-600', 'text-white');
    expect(button).not.toHaveClass('bg-black', 'text-white');
    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should call the onClick callback when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
