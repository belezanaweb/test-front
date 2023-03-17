import * as yup from "yup";
import useValidateCreditCard from "../../utils/validates/validateCreditCard";
import isValidDate from "../../utils/validates/validateDate";

export const schema = yup.object({
  name: yup.string().required("insira um nome válido").min(3),
  cardNumber: yup.string().typeError("insira um número de cartão válido").required("insira um número de cartão válido").test("is-valid-card", "insira um número de cartão válido", (value) => useValidateCreditCard(value)),
  cardExpiration: yup.string().required("insira uma data válida").test("is-valid-date", "insira uma data válida", (value) => isValidDate(value)),
  cardCvv: yup.string().typeError("insira um cvv válido").required("insira um cvv válido").min(3, "insira um cvv válido").max(3, "insira um cvv válido")
});
