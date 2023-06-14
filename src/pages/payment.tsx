import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { Box, SubmitButton } from "../components/styles";
import { Form } from "../components/form/Form";
import useLoadCart from "../hooks/useLoadCart";
import { FormDataType } from "../components/form/model";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PaymentPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const cart = useLoadCart();
  const navigate = useNavigate();

  useEffect(() => {
    setActionElement(<SubmitButton form="payment-form">Finalizar pedido</SubmitButton>);
    localforage.clear();
    setIsAuthenticated(false);
  }, [])

  useEffect(() => {
    if (cart) {
      setSummary({
        quantity: cart.items.length,
        subTotal: cart.subTotal,
        shippingTotal: cart.shippingTotal,
        discount: cart.discount,
        total: cart.total
      })
    }
  }, [cart])

  const onSubmit = (data: FormDataType) => {
    localforage.setItem('cartItems', cart?.items);
    localforage.setItem('formData', data);
    localforage.setItem('summary', {
      quantity: cart?.items.length,
      subTotal: cart?.subTotal,
      shippingTotal: cart?.shippingTotal,
      discount: cart?.discount,
      total: cart?.total
    });
    setIsAuthenticated(true);
    navigate("/confirmation");
  }

  return <>
    <Box>
      <h1>Cartão de crédito</h1>
      <Form onSubmit={onSubmit} />
    </Box>
  </>
}

export { PaymentPage }
