import FormInput from '~/components/FormInput';

describe('FormInput Component', () => {
  it('should create a FormInput when passing `mask` prop', () => {
    const wrapper = getStyledWrapper(FormInput, {
      props: {
        mask: []
      }
    });

    expect(wrapper.find('Styled(t)[mask]')).toHaveLength(1);
  });

  it('should render a styled.input when not passing `mask` prop', () => {
    const wrapper = getStyledWrapper(FormInput);

    expect(wrapper.find('Styled(t)[mask]')).not.toHaveLength(1);
  });

  it('should render an error text when passing an `error` prop', () => {
    const wrapper = getStyledWrapper(FormInput, {
      props: {
        error: 'Campo inválido.'
      }
    });

    expect(wrapper.find('span').text()).toEqual('Campo inválido.');
  });
});
