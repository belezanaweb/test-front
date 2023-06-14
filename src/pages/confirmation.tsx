import { useContext, useEffect, useState } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { LinkButton } from "../components/styles";
import localforage from "localforage";
import { SummaryDataType } from "../components/summary/models";
import { FormDataType } from "../components/form/model";
import { Item } from "../models/Item";
import { Cart } from "../components/cart";

const ConfirmationPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext);
  const [cartItems, setCartItems] = useState<Item[]>();

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

  useEffect(() => {
    setActionElement(<LinkButton $variant="secondary" to="/">Voltar para o início</LinkButton>)
  }, [])

  return <div>
    {cartItems && <Cart hidePrices={true} items={cartItems} />}
  </div>
}

export { ConfirmationPage }
