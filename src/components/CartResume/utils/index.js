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

export const buttonContent = {
  [BAG_TAB]: {
    text: 'Seguir para o pagamento',
    onClick: () => {},
  },
  [PAYMENT_TAB]: {
    text: 'Finalizar pedido',
    onClick: () => {},
  },
  [CONFIRMATION_TAB]: {
    text: 'Voltar ao início',
    onClick: () => {},
  },
};
