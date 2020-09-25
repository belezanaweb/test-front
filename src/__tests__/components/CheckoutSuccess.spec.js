import CheckoutSuccess from '~/components/CheckoutSuccess';

describe('CheckoutSuccess Component', () => {
  it('should match a snapshot', () => {
    const component = getStyledWrapperJSON(CheckoutSuccess);

    expect(component).toMatchSnapshot();
  });
});
