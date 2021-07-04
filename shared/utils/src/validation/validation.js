import * as Yup from "yup";
import moment from "moment";

/**
 * check if credit card expiration date is at least
 * 1 month ahead
 */

export const PaymentFormSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("O campo cartão de crédito é obrigatório")
    .min(19, "Verifique se o nº do cartão está correto"),
  cardOwner: Yup.string().required("O campo nome do titular é obrigatóriooooo"),
  cardValidation: Yup.string()
    .required("O campo de validade do cartão é obrigatório")
    .max(
      7,
      "Verifique se digitou o formato da data corretamente. Exemplo: MM/YYYY"
    ),
  cardCVV: Yup.string().required("O campo CVV é obrigatório").min(3).max(4),
});
