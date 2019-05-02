export const updateBag = (bagData) => (
  {
    type: 'UPDATE_BAG',
    bag: bagData
  }
);

export const updateCreditCardUser = (creditCard) => (
  {
    type: 'UPDATE_CARD_USER',
    creditCard: creditCard
  }
);
