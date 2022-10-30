import { object, string } from "yup";

const securityCodeValidation = /^\d{3,}/;
const creditCardNumberValidation = /^\d{16,}/;
const validateDateValidation = /^\d{6,}/;

export const validationSchema = object({
  creditCardNumber: string()
    .test({
      name: "cardNumber",
      exclusive: false,
      message: "Número do cartão inválido.",
      params: {},
      test: function (value: any) {
        return creditCardNumberValidation.test(value?.replace(/[^\d]/g, ""));
      },
    })
    .required("Número do cartão é obrigatório."),
  ownerName: string().required("Nome do titular é obrigatório."),
  validateDate: string()
    .required("Data de validade é obrigatória.")
    .test({
      name: "cardNumber",
      exclusive: false,
      message: "Número do cartão inválido.",
      params: {},
      test: function (value: any) {
        return validateDateValidation.test(value?.replace(/[^\d]/g, ""));
      },
    }),
  securityCode: string()
    .required("CVV é obrigatório.")
    .matches(securityCodeValidation, "cvv inválido."),
});
