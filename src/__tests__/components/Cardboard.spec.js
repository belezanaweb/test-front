import Cardboard from '~/components/Cardboard';

describe('Cardboard Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Cardboard, {
      children: 'test'
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with out prop', () => {
    const wrapper = getStyledWrapperJSON(Cardboard, {
      children: 'test',
      props: {
        out: true
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
