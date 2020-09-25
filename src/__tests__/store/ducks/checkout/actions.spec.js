import { doCheckout } from '~/store/ducks/checkout/actions';
import { Types } from '~/store/ducks/checkout/types';

const paymentData = {
  card_number: '2222.2222.2222.2222',
  card_holder_name: 'HUGO MARCELO',
  card_expiration_date: '12/2021',
  card_cvv: '444'
};

describe('Checkout Actions', () => {
  it('check `doCheckout` Action', async () => {
    expect(doCheckout(paymentData)).toEqual({
      type: Types.DO_CHECKOUT,
      payload: paymentData
    });
  });
});
