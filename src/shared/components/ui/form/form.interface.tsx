import * as React from 'react';

export interface IFormProps {
  children: JSX.Element | string;
  onSubmit: () => void;
}

export interface IFormGroupProps {
  children: JSX.Element | string;
  error?: string;
}

export interface IFormLabelProps {
  htmlFor: string;
  children: JSX.Element | string;
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
