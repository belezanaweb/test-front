import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import NavBar from '.';

const NavBarComponent: React.FC<MemoryRouterProps> = props => {
  return (
    <MemoryRouter
      initialEntries={['/', '/pagamento', '/confirmacao']}
      {...props}>
      <NavBar />
    </MemoryRouter>
  );
};

describe('<NavBar />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(<NavBarComponent initialIndex={0} />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when pagamento', () => {
    // Arrange
    const { baseElement } = render(<NavBarComponent initialIndex={1} />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when confirmacao', () => {
    // Arrange
    const { baseElement } = render(<NavBarComponent initialIndex={2} />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
