import { ReactNode } from 'react';

export interface IFormProps {
  children: any;
  onSubmit: () => void;
}

export interface IFormGroupProps {
  children: any;
  error: boolean;
  errorMessage: string;
}

export interface IFormLabelProps {
  htmlFor: string;
  children: any;
}

export interface IFormFieldProps {
  id?: string;
  name?: string;
  ref?: any;
  type: string;
}
