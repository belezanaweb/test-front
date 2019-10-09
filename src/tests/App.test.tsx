import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import './mocks/http';
import App from '../App';

describe('App', () => {
  let rendered: ReactWrapper;
  // -------------------------------------------------------
  it('should render and match snapshot', () => {
    rendered = mount(<App />);
    expect(rendered).toBeTruthy();
  });
  // -------------------------------------------------------
});
