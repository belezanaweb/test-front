import TextField from '.';

describe('TextField', () => {
  it('should create a TextField when passing `mask` prop', () => {
    const wrapper = getStyledWrapper(TextField, {
      props: {
        mask: []
      }
    });

    expect(wrapper.find('Styled(t)[mask]')).toHaveLength(1);
  });

  it('should render a styled.input when not passing `mask` prop', () => {
    const wrapper = getStyledWrapper(TextField);

    expect(wrapper.find('Styled(t)[mask]')).not.toHaveLength(1);
  });

  it('should render an error text when passing an `error` prop', () => {
    const wrapper = getStyledWrapper(TextField, {
      props: {
        error: 'Campo inválido.'
      }
    });

    expect(wrapper.find('span').text()).toEqual('Campo inválido.');
  });
});
