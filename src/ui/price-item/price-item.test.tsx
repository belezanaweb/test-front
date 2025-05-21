import { render, screen } from '@testing-library/react';
import { PriceItem } from './price-item.component';


describe('PriceItem component', () => {
  it('renders title and price correctly', () => {
    render(<PriceItem title="Produto A" price="100,00" />);

    expect(screen.getByText('Produto A')).toBeInTheDocument();
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
  });

  it('applies discount class when isDiscount is true', () => {
    render(<PriceItem title="Produto B" price="50,00" isDiscount />);

    const priceElement = screen.getByText('R$ 50,00');
    expect(priceElement).toHaveClass('discount');
  });

  it('does not apply discount class when isDiscount is false or undefined', () => {
    const { rerender } = render(<PriceItem title="Produto C" price="75,00" />);
    let priceElement = screen.getByText('R$ 75,00');
    expect(priceElement).not.toHaveClass('discount');

    rerender(<PriceItem title="Produto C" price="75,00" isDiscount={false} />);
    priceElement = screen.getByText('R$ 75,00');
    expect(priceElement).not.toHaveClass('discount');
  });
});
