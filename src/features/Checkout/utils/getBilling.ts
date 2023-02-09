import { Billing, CheckoutData } from "../types";

export const getBilling = (data: CheckoutData): Billing => ({
  shippingTotal: data?.shippingTotal,
  subTotal: data?.subTotal,
  discount: data?.discount,
  total: data?.total,
})