import { Model, Action } from 'exredux';
import { ICreditCard } from '../interfaces/ICreditCard';

@Model
export class CardModel {
  creditCard: ICreditCard = {
    creditCardNumber: '',
    creditCardExpiryDate: '',
    creditCardCCV: '',
    creditCardName: '',
    validationChecks: [false, false, false, false]
  };

  @Action
  changeData(creditCard: ICreditCard) {
    this.creditCard = creditCard;
  }

  isValidAll = () => {
    return this.creditCard.validationChecks.every(item => item === true);
  }
}
