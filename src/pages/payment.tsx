import { useContext, useEffect, useRef } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { SubmitButton } from "../components/styles";
import { Form } from "../components/form/Form";
import useLoadCart from "../hooks/useLoadCart";
import { FormDataType } from "../components/form/model";

const PaymentPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext)
  const cart = useLoadCart()

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
    console.log(data)
  }

  return <>
    <h1>Cartão de crédito</h1>
    <Form onSubmit={onSubmit} />
  </>
}

export { PaymentPage }
