import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from '../App';

const Application = () => <Router><App /></Router>;

describe('Test run the application', () => {
  it('should show the Tabs on the screen', () => {
    const { getByTestId } = render(<Application />);
    const Tabs = getByTestId('tabs');
    expect(Tabs).toBeInTheDocument();
  })
})