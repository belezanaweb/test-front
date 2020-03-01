import Container from '.';

describe('SkeletonPage', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Container);

    expect(wrapper).toMatchSnapshot();
  });
});
