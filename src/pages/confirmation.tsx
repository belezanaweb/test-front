import { useContext, useEffect, useState } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { Box, ConfirmationMessage, LinkButton } from "../components/styles";
import localforage from "localforage";
import { SummaryDataType } from "../components/summary/models";
import { Item } from "../models/Item";
import { Cart } from "../components/cart";
import { FormDataType } from "../components/form/model";
import { secretCardNumber } from "../helpers/secretCardNumber";

const ConfirmationPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext);
  const [cartItems, setCartItems] = useState<Item[]>();
  const [formData, setFormData] = useState<FormDataType>();

  (async () => {
    const cart = await localforage.getItem<Item[]>('cartItems');
    if (cart) {
      setCartItems(cart);
    }
  })();

  (async () => {
    const summary = await localforage.getItem<SummaryDataType>('summary');

    if (summary) {
      setSummary({
        quantity: summary.quantity,
        subTotal: summary.subTotal,
        shippingTotal: summary.shippingTotal,
        discount: summary.discount,
        total: summary.total
      })
    }
  })();

  (async () => {
    const formData = await localforage.getItem<FormDataType>('formData');
    if (formData) {
      setFormData(formData);
    }
  })();

  useEffect(() => {
    setActionElement(<LinkButton $variant="secondary" to="/">Voltar para o início</LinkButton>);
  }, [])

  return <div>
    <Box>
      <ConfirmationMessage>
        <h1>Compra efetuada com sucesso</h1>
        <p>{secretCardNumber(formData?.cardNumber ?? "")}</p>
        <p>{formData?.name}</p>
        <p>{formData?.expiration}</p>
      </ConfirmationMessage>
    </Box>
    <Box>
      {cartItems && <Cart hidePrices={true} items={cartItems} />}
    </Box>
  </div>
}

export { ConfirmationPage }
