import { FC, useState } from "react";
import Cart from "../Cart";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "../Menu";
import { Icheckout } from "./Checkout.interface";



const Checkout: FC = () => {
  const [step] = useState(0);

  const menuItems = [
    {
      label: "Cart",
      path: "/",
    },
    {
      label: "Payment",
      path: "/payment",
    },
    {
      label: "Confirmation",
      path: "/confirmation",
    },
  ];

   return (
    <Router>
      <Menu step={step} items={menuItems} />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default Checkout;
