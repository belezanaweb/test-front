export interface IStep {
  name: string
  pathname: StepPathname
}

export enum StepPathname {
  Sacola = '/cart',
  Pagamento = '/payment',
  Confirmacao = '/success'
}
