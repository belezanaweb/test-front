import { render, screen, fireEvent } from '@testing-library/react';
import { TabItem } from './tab-item.component';


describe('TabItem component', () => {
  it('renders the label correctly', () => {
    render(<TabItem label="Aba 1" onClick={() => {}} />);
    expect(screen.getByText('Aba 1')).toBeInTheDocument();
  });

  it('applies active class when isCurrentTab is true', () => {
    render(<TabItem label="Aba 2" isCurrentTab onClick={() => {}} />);
    const button = screen.getByRole('button', { name: 'Aba 2' });
    expect(button).toHaveClass('active');
  });

  it('does not apply active class when isCurrentTab is false or undefined', () => {
    const { rerender } = render(<TabItem label="Aba 3" onClick={() => {}} />);
    let button = screen.getByRole('button', { name: 'Aba 3' });
    expect(button).not.toHaveClass('active');

    rerender(<TabItem label="Aba 3" isCurrentTab={false} onClick={() => {}} />);
    button = screen.getByRole('button', { name: 'Aba 3' });
    expect(button).not.toHaveClass('active');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<TabItem label="Aba Click" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Aba Click' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
