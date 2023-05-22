import { Button, ContainerButton, Discount, LabelValue, Products, Shipping, SubTotal } from "./infoPrices.style"

type InfoPRicesPorps = {
  subTotal: string,
  shippingTotal: string,
  discount: string,
  total: string
  totalItens: number
  labelButton: string
  handleClick?: () => void
}

function showLabelValue(label: string, value: string) {
  return (
    <LabelValue>
      <div>{label}</div>
      <div>{value}</div>
    </LabelValue>
  )
}

export default function infoPrices(props: InfoPRicesPorps) {
  return (
    <div>
      <Products>{showLabelValue(`Produtos: (${props.totalItens}) itens`, props.subTotal)}</Products>
      <Shipping>{showLabelValue('Frete:', props.shippingTotal)}</Shipping>
      <Discount>{showLabelValue('Desconto', props.discount)}</Discount>
      <SubTotal>{showLabelValue('Subtotal', props.total)}</SubTotal>
      <ContainerButton>{ props.handleClick ? <Button onClick={props.handleClick} >{props.labelButton}</Button> : <Button type="submit" >{props.labelButton}</Button>}</ContainerButton>   
    </div>
  )
}