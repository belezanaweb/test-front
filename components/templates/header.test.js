import { render } from 'enzyme';
import { RecoilRoot } from 'recoil';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mount, shallow } from 'enzyme'
import Header from './header';

const themeMock = { /* your theme here */ }

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={themeMock}>
    { children }
  </ThemeProvider>
)

export const shallowWithTheme = tree => shallow(tree, {
  wrappingComponent: ThemeProviderWrapper
})


describe(' Component + styled-componenents + recoil', () => {
  it('Header should render without crashing', () => {
    const wrapper = shallowWithTheme(<RecoilRoot><Header><ul><li>Sacola</li></ul></Header></RecoilRoot>);
    expect(wrapper.find('li')).toHaveLength(1);
  });
});