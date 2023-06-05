import { checkoutTabs } from '../../../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

export const normalizeCartData = data => {
  return {
    productsQuantity: data.items.length,
    subTotal: data.subTotal.toFixed(2).replace('.', ','),
    shipping: data.shippingTotal.toFixed(2).replace('.', ','),
    discount: data.discount.toFixed(2),
    total: data.total.toFixed(2).replace('.', ','),
  };
};

export const getButtonState = (currentTab, setCurrentTab) => {
  switch (currentTab) {
    case BAG_TAB:
      return {
        type: 'button',
        form: '',
        buttonText: 'Seguir para o pagamento',
        nextStep: () => setCurrentTab(PAYMENT_TAB),
      };
    case PAYMENT_TAB:
      return {
        type: 'submit',
        form: 'payment-form',
        buttonText: 'Finalizar pedido',
        nextStep: () => {},
      };
    case CONFIRMATION_TAB:
      return {
        type: 'button',
        form: '',
        buttonText: 'Voltar ao início',
        nextStep: () => setCurrentTab(BAG_TAB),
      };
  }
};
