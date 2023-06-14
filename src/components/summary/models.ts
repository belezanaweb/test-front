import { Cart } from "../../models/Cart";

export type SummaryDataType = {
  quantity: number
} & Omit<Cart, "items" | "id">;
