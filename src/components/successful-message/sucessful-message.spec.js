import SucessfulMessage from '.';

describe('SucessfulMessage', () => {
  it('should match a snapshot', () => {
    const component = getStyledWrapperJSON(SucessfulMessage, {
      props: {
        children: 'mensagem de sucesso'
      }
    });

    expect(component).toMatchSnapshot();
  });
});
