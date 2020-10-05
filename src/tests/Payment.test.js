import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import nock from "nock";
import { render, waitForElement, fireEvent } from '@testing-library/react';

import Mock from './Mock';
import App from '../App';

const Application = () => <Router><App /></Router>;
const api = nock("http://www.mocky.io/v2",{reqheaders: {'Access-Control-Allow-Origin': '*'}, allowUnmocked: true});

describe('Test show payment screen', () => {
  it('should run application, show cart screen and navigate to payment screen', async () => {

    api.get("/5b15c4923100004a006f3c07").delay(2000).reply(200, { data: Mock }, {'Content-Type': 'application/json'});
    const { getByTestId } = render(<Application />);
    const toPayment = await waitForElement(() => getByTestId('toPayment'));
    fireEvent.click(toPayment);
    const paymentScreen = await waitForElement(() => getByTestId('payment-screen'));
    expect(paymentScreen).toBeInTheDocument();
  })
});

describe('Test fill payment info', () => {
  it('should run application, show cart screen, navigate to payment screen and fill form', async () => {

    api.get("/5b15c4923100004a006f3c07").delay(2000).reply(200, { data: Mock }, {'Content-Type': 'application/json'});
    const { getByTestId } = render(<Application />);
    const toPayment = await waitForElement(() => getByTestId('toPayment'));
    fireEvent.click(toPayment);
    const creditCard = await waitForElement(() => getByTestId('credit-card'));
    const name = await waitForElement(() => getByTestId('name'));
    const date = await waitForElement(() => getByTestId('date'));
    const cvv = await waitForElement(() => getByTestId('cvv'));

    const cardInfo = {
      number: '4485563243119701',
      name: 'Glauber Holanda',
      date: '02/2028',
      cvv: '657'
    }

    fireEvent.change(
      creditCard,
      { target: { value: cardInfo.number }}
    );
    expect(creditCard.value).toEqual(cardInfo.number);

    fireEvent.change(
      name,
      { target: { value: cardInfo.name }}
    );
    expect(name.value).toEqual(cardInfo.name);

    fireEvent.change(
      date,
      { target: { value: cardInfo.date }}
    );
    expect(date.value).toEqual(cardInfo.date);

    fireEvent.change(
      cvv,
      { target: { value: cardInfo.cvv }}
    );
    expect(cvv.value).toEqual(cardInfo.cvv);

  })
});