import { render } from '@testing-library/react';
import React from 'react';
import Loading from '.';

describe('<Loading />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<Loading />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
