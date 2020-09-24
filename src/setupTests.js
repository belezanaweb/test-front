import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reduxMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { middlewares } from './store';

import theme from './styles/theme';

require('jest-fetch-mock').enableMocks();

configure({ adapter: new Adapter() });

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

global.__createTestStore__ = reduxMockStore(middlewares());
