import React from 'react';
import { useForm, FormContextValues } from "react-hook-form";

interface CreditCardFormContextProps extends Pick<FormContextValues, 'control' | 'register' | 'errors'> {}

export const CreditCardFormContext = React.createContext<CreditCardFormContextProps | null>(null);

interface CreditCardFormControllerProps {
  children: (...args: any) => React.ReactNode;
  onSubmit: (...args: any) => void;
}

const CreditCardFormController: React.FC<CreditCardFormControllerProps> = ({ children, onSubmit }) => {
  const { control, errors, handleSubmit, register } = useForm();

  return (
    <CreditCardFormContext.Provider value={{ control, register, errors }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children({ errors })}
      </form>
    </CreditCardFormContext.Provider>
  );
};

export default CreditCardFormController;
