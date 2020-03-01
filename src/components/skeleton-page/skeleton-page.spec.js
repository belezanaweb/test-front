import SkeletonPage from '.';

describe('SkeletonPage', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(SkeletonPage);

    expect(wrapper).toMatchSnapshot();
  });
});
