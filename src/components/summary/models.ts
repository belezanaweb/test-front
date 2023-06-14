import { Cart } from "../../models/cart";

export type SummaryDataType = {
  quantity: number
} & Omit<Cart, "items" | "id">;
