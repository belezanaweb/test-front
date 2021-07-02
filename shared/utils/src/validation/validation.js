import * as Yup from "yup";
import moment from "moment";

/**
 * check if credit card expiration date is at least
 * 1 month ahead
 */
const expirationDate = moment().add(1, "months").format("MM/YYYY");

export const PaymentFormSchema = Yup.object().shape({
  cardNumber: Yup.string().required("O campo cartão de crédito é obrigatório"),
  cardOwner: Yup.string().required("O campo nome do titular é obrigatório"),
  cardValidation: Yup.string()
    .required("O campo de validade do cartão é obrigatório")
    .max(
      7,
      "Verifique se digitou o formato da data corretamente. Exemplo: MM/YYYY"
    )
    .min(expirationDate, "Por favor verifique a validade do seu cartão"),
  cardCVV: Yup.string().required("O campo CVV é obrigatório").min(3).max(4),
});
