export interface IInputProps {
  value?: string;
  label: string;
  placeholder: string;
  handleChange: (value: string) => void;
  isValid: boolean;
  errorMessage?: string;
  children?: never;
  className?: string;
}
