import { useContext, useEffect } from "react"
import { ActionContext } from "../contexts/ActionContext"
import { LinkButton } from "../components/styles";
import localforage from "localforage";
import { SummaryDataType } from "../components/summary/models";

const ConfirmationPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext);

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

  return <div>confirmation</div>
}

export { ConfirmationPage }
