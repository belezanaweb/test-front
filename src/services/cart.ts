import axios from "axios";

export const getCartData = () => {
  return axios.get("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
};

interface IFinishPurchaseValues {
  idCart: string;
  creditCardNumber: string;
  ownerName: string;
  validateDate: string;
  securityCode: string;
}

export function finishPurchase(
  values: IFinishPurchaseValues
): Promise<{ data: Omit<IFinishPurchaseValues, "idCart" | "securityCode"> }> {
  return Promise.resolve({
    data: {
      creditCardNumber: `****.****.****.${
        values.creditCardNumber.split(".")[3]
      }`,
      ownerName: values.ownerName,
      validateDate: values.validateDate,
    },
  });
}
