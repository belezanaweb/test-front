import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { StyleSheetTestUtils } = require('aphrodite');
const {
  StyleSheetTestUtils: StyleSheetTestUtilsNoImportant,
} = require('aphrodite/no-important');

StyleSheetTestUtils.suppressStyleInjection();
StyleSheetTestUtilsNoImportant.suppressStyleInjection();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
