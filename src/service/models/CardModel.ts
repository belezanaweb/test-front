import { Model, Action } from 'exredux';
import { ICreditCard } from '../interfaces/ICreditCard';

@Model
export class CardModel {
  getDefaultData = () => ({
    creditCardNumber: '',
    creditCardExpiryDate: '',
    creditCardCCV: '',
    creditCardName: '',
    validationChecks: [false, false, false, false]
  })

  creditCard: ICreditCard = this.getDefaultData();

  @Action
  changeData(creditCard: ICreditCard) {
    this.creditCard = creditCard;
  }

  isValidAll = () => {
    return this.creditCard.validationChecks.every(item => item === true);
  }

  @Action
  reset() {
    this.creditCard = this.getDefaultData();
  }
}
