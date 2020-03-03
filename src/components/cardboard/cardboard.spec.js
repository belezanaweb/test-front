import Cardboard from '.';

describe('Cardboard', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Cardboard);

    expect(wrapper).toMatchSnapshot();
  });
});
