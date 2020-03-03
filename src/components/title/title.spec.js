import Title from '.';

describe('Title', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Title);

    expect(wrapper).toMatchSnapshot();
  });
});
