import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { reactHot } from 'tsrex/utils';
import './styles.css';

function renderToDOM() {
  const root = document.getElementById('app');
  const HotReloadComponent = reactHot(module, App);
  ReactDOM.render(<HotReloadComponent />, root);
}
renderToDOM();
export { renderToDOM };
