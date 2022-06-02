type Nav = {
  id: number
  name: string
  active: boolean
}

export type CheckoutType = {
  navigation: Nav[]
  setNavigation: React.Dispatch<React.SetStateAction<Nav[]>>
}
