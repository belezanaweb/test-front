export type Values = {
  idValid: boolean
  creditCard: string
  cvv: string
  name: string
  date: string
}

export type FormProps = {
  values: Values
  setValues: React.Dispatch<React.SetStateAction<{ values: Values }>>
}
