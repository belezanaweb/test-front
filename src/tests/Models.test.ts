import './mocks/http';
import { RouterModel } from '../service/models/RouterModel';
import { CardModel } from '../service/models/CardModel';

describe('RouterModel', () => {
  const routerModel = new RouterModel();
  // -------------------------------------------------------
  it('check model instance', () => {
    expect(routerModel.pathname).toEqual('');
  });
  // -------------------------------------------------------
  it('call routeChange', () => {
    routerModel.routeChange('teste');
    expect(routerModel.pathname).toEqual('teste');
  });
  // -------------------------------------------------------
});

describe('CardModel', () => {
  const cardModel = new CardModel();
  // -------------------------------------------------------
  it('check model instance', () => {
    expect(cardModel.creditCard).toEqual(cardModel.getDefaultData());
    expect(cardModel.isValidAll()).toBeFalsy();
  });
  // -------------------------------------------------------
  it('call changeData', () => {
    const mockCreditCard = {
      creditCardNumber: '4123123465429876',
      creditCardExpiryDate: '02/2020',
      creditCardCCV: '123',
      creditCardName: 'User Test',
      validationChecks: [true, true, true, true]
    };
    cardModel.changeData(mockCreditCard);
    expect(cardModel.creditCard).toEqual(mockCreditCard);
    expect(cardModel.isValidAll()).toBeTruthy();
  });
  // -------------------------------------------------------
  it('call reset', () => {
    cardModel.reset();
    expect(cardModel.creditCard).toEqual(cardModel.getDefaultData());
    expect(cardModel.isValidAll()).toBeFalsy();
  });
  // -------------------------------------------------------
});
