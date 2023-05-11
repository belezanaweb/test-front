import * as Yup from 'yup';

export default Yup.object().shape({
  paymentNumber: Yup.string().required('campo obrigatório').min(15, 'insira um número de cartão válido'),
  paymentName: Yup.string().required('insira um nome válido'),
  paymentValid: Yup.string().required('campo obrigatório').min(5, 'insira uma data válida'),
  paymentCvv: Yup.string().required('campo obrigatório').min(3, 'insira um CVV válido'),
});
