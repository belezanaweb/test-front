import * as React from 'react';

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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFieldStyles {
  error?: boolean;
}

export interface IGroupStyles {
  error?: string;
}
