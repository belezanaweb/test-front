import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

// Components
import { Input as InputStyled, Label, Wrapper, Error } from './styles'

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return result
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: any;
  width?: string;
  onChange?: (event: any) => void;
  minlength?: string | number;
  maxlength?: string | number;
}

export function Input({ name, label, onChange, width = '100%', ...other }: InputProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const fieldError = get(errors, name)

  return (
    <Wrapper width={width}>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled id={name} {...register(name)} onChange={onChange} {...other} />
      <Error>{fieldError ? fieldError.message?.toString() : ''}</Error>
    </Wrapper>
  )
}
