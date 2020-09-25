import ButtonLink from '~/components/ButtonLink';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children
  };
});

describe('Button Link Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(ButtonLink, {
      children: 'test'
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with route prop', () => {
    const wrapper = getStyledWrapperJSON(ButtonLink, {
      children: 'test',
      route: '/checkout'
    });

    expect(wrapper).toMatchSnapshot();
  });
});
