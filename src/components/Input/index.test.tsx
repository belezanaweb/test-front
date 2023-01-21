import { render, fireEvent } from '@testing-library/react';
import { Theme } from '../../theme';

import { Input } from './index';
import { cardCVVMask } from "../../helpers/input";

vi.mock("../../helpers/input", () => ({
  fieldValidation: () => false,
  cardCVVMask: () => cardCVVMask,
}));


describe('Input component tests', () => {
  it('should render Input component without error', () => {
    const { getByRole } = render(
      <Theme>
        <Input
          label="CVV:"
          type="text"
          name="___"
          value="123"
          placeholder="____.____.____.____"
          inputMaskChange={vi.fn()}
          mask={cardCVVMask}
          validationLength={3}
          setFormValidation={vi.fn()}
          isValidated={false}
        />
      </Theme>
    );

    const element = getByRole('textbox');
    fireEvent.focus(element);
    fireEvent.blur(element);

    expect(element).toBeInTheDocument();
  });
});
