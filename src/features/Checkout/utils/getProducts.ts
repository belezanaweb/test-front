import { CheckoutData, Product } from "../types";

export const getProducts = (bagData: CheckoutData): Product[]  => bagData?.items ?? []
