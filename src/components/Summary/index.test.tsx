import { render } from '@testing-library/react';
import React from 'react';
import Summary from '.';

const prices = {
  subTotalFormatted: 'R$ 610,00',
  shippingTotalFormatted: 'R$ 0,00',
  discountFormatted: 'R$ 10,00',
  totalFormatted: 'R$ 600,00',
};

describe('<Summary />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(
      <Summary
        subTotal={prices.subTotalFormatted}
        shippingTotal={prices.shippingTotalFormatted}
        discount={prices.discountFormatted}
        total={prices.totalFormatted}
      />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when not shipping', () => {
    // Arrange
    const { baseElement } = render(
      <Summary
        subTotal={prices.subTotalFormatted}
        discount={prices.discountFormatted}
        total={prices.totalFormatted}
      />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when not discount', () => {
    // Arrange
    const { baseElement } = render(
      <Summary
        subTotal={prices.subTotalFormatted}
        shippingTotal={prices.shippingTotalFormatted}
        total={prices.totalFormatted}
      />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when not shipping and discount', () => {
    // Arrange
    const { baseElement } = render(
      <Summary
        subTotal={prices.subTotalFormatted}
        total={prices.totalFormatted}
      />,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
