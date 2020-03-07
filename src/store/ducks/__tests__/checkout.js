import reducer, { Types, doCheckout } from '../checkout';

const paymentData = {
  card_number: '2222.2222.2222.2222',
  card_holder_name: 'LUAN VIEIRA PEREIRA',
  card_expiration_date: '12/2021',
  card_cvv: '444'
};

describe('checkout', () => {
  describe('actions', () => {
    it('check `doCheckout` Action', async () => {
      expect(doCheckout(paymentData)).toEqual({
        type: Types.DO_CHECKOUT,
        payload: paymentData
      });
    });
  });

  describe('reducer', () => {
    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual({
        card_number: '',
        card_holder_name: '',
        card_expiration_date: '',
        card_cvv: ''
      });
    });

    it('should set payment data when pass Type DO_CHECKOUT', () => {
      expect(
        reducer(undefined, {
          type: Types.DO_CHECKOUT,
          payload: paymentData
        })
      ).toEqual(paymentData);
    });
  });
});
