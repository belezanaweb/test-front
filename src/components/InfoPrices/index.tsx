type InfoPRicesPorps = {
  subTotal: string,
  shippingTotal: string,
  discount: string,
  total: string
  totalItens: number
  labelButton: string
  handleClick: () => void
}

function showLabelValue(label: string, value: string) {
  return (
    <div>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  )
}

export default function infoPrices(props: InfoPRicesPorps) {
  return (
    <div>
      <div>{showLabelValue(`Produtos: (${props.totalItens}) itens`, props.subTotal)}</div>
      <div>{showLabelValue('Frete:', props.shippingTotal)}</div>
      <div>{showLabelValue('Desconto', props.discount)}</div>
      <div>{showLabelValue('Subtotal', props.total)}</div>
      <div><button onClick={props.handleClick}>{props.labelButton}</button></div>   
    </div>
  )
}