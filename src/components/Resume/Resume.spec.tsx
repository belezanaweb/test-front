import Resume from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';
import { responseBag } from '_test/mock';

describe('Components :: Resume', () => {
  it('should be render with data', () => {
    customRender(<Resume {...responseBag} action={<small>action</small>} />);

    const subTotal = screen.getByText(/R\$ 202,20/i);
    expect(subTotal).toBeInTheDocument();

    const shippingTotal = screen.getByText(/R\$ 2,20/i);
    expect(shippingTotal).toBeInTheDocument();

    const discount = screen.getByText(/R\$ 100,00/i);
    expect(discount).toBeInTheDocument();

    const total = screen.getByText(/R\$ 102,20/i);
    expect(total).toBeInTheDocument();
  });
});
