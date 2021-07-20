import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('Should render the button and have a onClick function', async () => {
    const { getByText } = render(<Button text="Test Button" onClick={() => {}} />);
    expect(getByText('Test Button')).toHaveClass('btnProceed');
  });

  it('Should execute onClick function', async () => {
    let testvar = 'Before Click';
    const { getByText } = render(
      <Button
        text="Test Button"
        onClick={() => {
          testvar = 'After Click';
        }}
      />
    );
    const buttonNode = await waitForElement(() => getByText('Test Button'));
    expect(testvar).toEqual('Before Click');
    fireEvent.click(buttonNode);
    expect(testvar).toEqual('After Click');
  });
});
