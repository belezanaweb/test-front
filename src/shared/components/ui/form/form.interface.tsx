export interface IFormProps {
  children: any;
  onSubmit: () => void;
}

export interface IFormGroupProps {
  children: any;
  error?: string;
}

export interface IFormLabelProps {
  htmlFor: string;
  children: any;
}

export interface IFormFieldProps {
  id?: string;
  name?: string;
  inputRef?: any;
  type: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
}

export interface IFieldStyles {
  error?: boolean;
}
