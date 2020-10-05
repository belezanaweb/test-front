import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import nock from "nock";
import { render, waitForElement, fireEvent } from '@testing-library/react';

import Mock from './Mock';
import App from '../App';

const Application = () => <Router><App /></Router>;
const api = nock("http://www.mocky.io/v2",{reqheaders: {'Access-Control-Allow-Origin': '*'}, allowUnmocked: true});

describe('Test show cart screen', () => {
  it('should run application, show cart and toPayment button', async () => {

    api.get("/5b15c4923100004a006f3c07").delay(2000).reply(200, { data: Mock }, {'Content-Type': 'application/json'});
    const { getByTestId } = render(<Application />);
    const toPayment = await waitForElement(() => getByTestId('toPayment'));
    expect(toPayment).toBeInTheDocument();
  })
})