import { render } from '@testing-library/react';
import React from 'react';
import Box from '.';

describe('<Box />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Box>Box content</Box>);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
