export type InputMaskProps = {
  value?: string
  label?: string
  placeholder?: string
  mask?: string
  error?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}