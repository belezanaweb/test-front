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
  htmlFor?: string;
  children: JSX.Element | string;
}

export interface IFormFieldProps {
  id?: string;
  name?: string;
  inputRef?: any;
  type?: string;
  placeholder?: string;
  initialValue?: string;
  error?: boolean;
  onChange?: (value: string) => void;
  mask?: (value: string) => string;
  role?: string;
}

export interface IFieldStyles {
  error?: boolean;
}

export interface IGroupStyles {
  error?: string;
}
