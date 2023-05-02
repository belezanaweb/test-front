import InputMask from 'react-input-mask'

interface InputProps {
  onChange: (name: string, value: string) => void;
  name: string;
  id?: string;
  placeholder?: string;
  value?: string;
  labelText?: string;
  mask?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export default function Input({
  onChange,
  mask = '',
  name,
  id,
  value,
  placeholder,
  labelText,
  hasError = false,
  errorMessage
}: InputProps) {
  let inputClasses = `text-sm leading-4 rounded w-full border border-neutral-300 p-3`
  let labelClasses = `text-sm leading-4`

  if (hasError) {
    inputClasses = `${inputClasses} border-red-500`
  }
  return (
    <div>
      {labelText && (
        <label className={labelClasses} htmlFor={id}>
          {labelText}
        </label>
      )}
      <InputMask
        mask={mask}
        className={inputClasses}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        value={value}
        name={name}
        id={id}
      />
      {hasError && <span className="text-xs text-red-500 leading-none">{errorMessage}</span>}
    </div>
  )
}
