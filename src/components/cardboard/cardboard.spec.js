import Cardboard from '.';

describe('Cardboard', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Cardboard);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with out prop', () => {
    const wrapper = getStyledWrapperJSON(Cardboard, {
      props: {
        out: true
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
