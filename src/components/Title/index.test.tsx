import { render } from '@testing-library/react';
import React from 'react';
import Title from '.';

describe('<Title />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Title>Text</Title>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
