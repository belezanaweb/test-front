export default {
  name_product_1: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
  price_1: 'R$ 299,00',
  name_product_2: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
  price_2: 'R$ 99,90',
  discont: 30,
  product_total: 624.8,
  shipping_product: 5.3,
  button_text: 'SEGUIR PARA O PAGAMENTO',
  text_next_screen: 'CARTÃO DE CRÉDITO',
  INITIAL_STATE: {
    numCreditCard: '',
    nameCreditCard: '',
    expirationDate: '',
    codCreditCard: '',
    dataCreditCard: {},
    products: [],
    specifications: {
      prodTotal: 0,
      shipping: 0,
      discont: 0,
      total: 0
    }
  }
}
