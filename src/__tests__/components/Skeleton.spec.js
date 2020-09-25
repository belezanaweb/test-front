import Skeleton from '~/components/Skeleton';

describe('Skeleton Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Skeleton);

    expect(wrapper).toMatchSnapshot();
  });
});
