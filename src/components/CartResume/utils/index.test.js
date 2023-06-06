import { getButtonState } from './';
import { checkoutTabs } from '../../../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

describe('getButtonState function', () => {
  it('should return the correct button state for the bag tab', () => {
    const setCurrentTab = jest.fn();
    const buttonState = getButtonState(BAG_TAB, setCurrentTab);

    expect(buttonState.type).toBe('button');
    expect(buttonState.form).toBe('');
    expect(buttonState.buttonText).toBe('Seguir para o pagamento');
    expect(buttonState.nextStep).toBeInstanceOf(Function);

    buttonState.nextStep();
    expect(setCurrentTab).toHaveBeenCalledWith(PAYMENT_TAB);
  });

  it('should return the correct button state for the payment tab', () => {
    const setCurrentTab = jest.fn();
    const buttonState = getButtonState(PAYMENT_TAB, setCurrentTab);

    expect(buttonState.type).toBe('submit');
    expect(buttonState.form).toBe('payment-form');
    expect(buttonState.buttonText).toBe('Finalizar pedido');
    expect(buttonState.nextStep).toBeInstanceOf(Function);

    buttonState.nextStep();
    expect(setCurrentTab).not.toHaveBeenCalled();
  });

  it('should return the correct button state for the confirmation tab', () => {
    const setCurrentTab = jest.fn();
    const buttonState = getButtonState(CONFIRMATION_TAB, setCurrentTab);

    expect(buttonState.type).toBe('button');
    expect(buttonState.form).toBe('');
    expect(buttonState.buttonText).toBe('Voltar ao início');
    expect(buttonState.nextStep).toBeInstanceOf(Function);

    buttonState.nextStep();
    expect(setCurrentTab).toHaveBeenCalledWith(BAG_TAB);
  });
});
