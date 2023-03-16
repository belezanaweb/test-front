import { FC, useState } from "react";
import Cart from "../Cart";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../Menu";


const Checkout: FC = () => {
  const [step, setStep] = useState(0);

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


  function goToPayment() {
    setStep(1);
  }

  function confirmPayment() {
    setStep(2);
  }

  function goToCart() {
    setStep(0);
  }

  return (
    <BrowserRouter>
      <Menu step={step} items={menuItems}/>
      <Routes>
        <Route path="/" element={<Cart navigation={goToPayment} />} />
        <Route path="/payment" element={<Payment navigation={confirmPayment} />} />
        <Route path="/confirmation" element={<Confirmation navigation={goToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Checkout;
