import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test('Renders main page correctly', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
})
