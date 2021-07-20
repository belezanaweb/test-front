import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './textField';
import '@testing-library/jest-dom';

describe('Text Field', () => {
  it('Should render the text field', () => {
    const { getByLabelText } = render(
      <TextField
        id="test-id"
        className="testClass"
        label="test-label"
        onChange={() => {}}
        value="1111"
        mask="9999.9999"
        placeholder="test-placeholder"
        isValid={false}
      />
    );
    expect(getByLabelText('test-label')).not.toBeNull();
  });

  it('Should pass correct props', async () => {
    const { rerender, getByTestId, getByPlaceholderText } = render(
      <TextField
        id="test-id"
        className="testClass"
        label="test-label"
        onChange={(e) => {}}
        value="1111"
        mask="9999.9999"
        placeholder="test-placeholder"
        isValid={true}
      />
    );
    expect(getByTestId('test-id')).toHaveClass('input', 'testClass', 'validInput');
    expect(getByTestId('test-id')).toHaveValue('1111.____');
    expect(getByPlaceholderText('test-placeholder')).not.toBeNull();
    rerender(
      <TextField
        id="test-id"
        className="afterRerender"
        label="test-label"
        onChange={(e) => {}}
        value="2222.3333"
        mask="9999.9999"
        placeholder="afterRerender"
        isValid={false}
      />
    );
    expect(getByTestId('test-id')).toHaveClass('input', 'afterRerender', 'invalidInput');
    expect(getByTestId('test-id')).toHaveValue('2222.3333');
    expect(getByPlaceholderText('afterRerender')).not.toBeNull();
  });
});
