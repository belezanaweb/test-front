import { SummaryProps } from "components/Summary/types";
import { CartResponseProps } from "../containers/CartProvider";

export const summaryMapper = (
  apiResponseData: CartResponseProps
): SummaryProps => {
  return {
    discount: apiResponseData.discount,
    shippingTotal: apiResponseData.shippingTotal,
    subTotal: apiResponseData.subTotal,
    total: apiResponseData.total,
  };
};
