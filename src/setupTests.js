import React from 'react';

import { ThemeProvider } from 'styled-components';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import { create } from 'react-test-renderer';

configure({ adapter: new Adapter() });

import theme from './styles/theme';

const getStyledWrapper = (
  Component = () => <div></div>,
  { props = {}, children, renderType = mount } = {}
) => {
  return renderType(
    <ThemeProvider theme={theme}>
      <Component {...props}>{children}</Component>
    </ThemeProvider>
  );
};

const getStyledWrapperJSON = (Component, options) =>
  getStyledWrapper(Component, {
    ...options,
    renderType: create
  }).toJSON();

global.React = React;
global.getStyledWrapper = getStyledWrapper;
global.getStyledWrapperJSON = getStyledWrapperJSON;
