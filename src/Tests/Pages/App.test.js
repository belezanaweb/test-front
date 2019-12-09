import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from '../../App';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('runs without crashing', () => {
  act(() => {
    render(<App />, container);
  });
});

it('header have cart item', () => {
  act(() => {
    render(<App />, container);
  });
  except(container.querySelector())
});

it('header have pyament item', () => {
  act(() => {
    render(<App />, container);
  });

});
it('header have confirmation item', () => {
  act(() => {
    render(<App />, container);
  });

});
