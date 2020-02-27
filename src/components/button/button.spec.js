import Button from '.';

describe('Button', () => {
  describe('#render', () => {
    it('should return a `button`', () => {
      const wrapper = getStyledWrapper(Button, {
        children: 'test'
      });

      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should match a snapshot', () => {
      const wrapper = getStyledWrapperJSON(Button, {
        children: 'test'
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
