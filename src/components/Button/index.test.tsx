import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('<Button />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Button>Button</Button>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when mouse enter', () => {
    // Arrange
    const { baseElement } = render(<Button>Button</Button>);

    // Act
    fireEvent.mouseEnter(screen.getByText('Button'));

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when disabled', () => {
    // Arrange
    const { baseElement } = render(<Button disabled>Button</Button>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
