import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Payment } from "./pages/Payment";
import { Success } from "./pages/Success";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/cart" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}