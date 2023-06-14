import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { SubmitButton } from "../components/styles";
import { Form } from "../components/form/Form";
import useLoadCart from "../hooks/useLoadCart";
import { FormDataType } from "../components/form/model";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext)
  const cart = useLoadCart()
  const navigate = useNavigate();

  useEffect(() => {
    setActionElement(<SubmitButton form="payment-form">Finalizar pedido</SubmitButton>)
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
    localforage.setItem('formData', data);
    localforage.setItem('summary', {
      quantity: cart?.items.length,
      subTotal: cart?.subTotal,
      shippingTotal: cart?.shippingTotal,
      discount: cart?.discount,
      total: cart?.total
    });
    navigate("/confirmation");
  }

  return <>
    <h1>Cartão de crédito</h1>
    <Form onSubmit={onSubmit} />
  </>
}

export { PaymentPage }
