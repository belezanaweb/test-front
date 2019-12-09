import React from 'react';
import App from '../../App';
import renderer from  'react-dom/test-utils';

it('renders without crash', () => {
  const component = renderer.create(<App />);


});
