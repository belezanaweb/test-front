import React, { useEffect } from 'react';
import mask from '../helpers/mask';

interface iType {
  min: number,
  max: number,
  mask: string,
  message: string,
  regex?: RegExp
}

const inputTypes: { [key: string]: iType } = {
  cardNumber: {
    min: 19,
    max: 19,
    mask: '0000-0000-0000-0000',
    message: 'Cartão Inválido',
    regex: /[^\d]+/gi
  },
  cardName: {
    min: 5,
    max: 50,
    mask: '0',
    message: 'Nome Inválido',
    regex: /[^[a-zA-Z\s]+/gi
  },
  expire: {
    min: 7,
    max: 7,
    mask: '00/0000',
    message: 'Validade Incorreta',
    regex: /[^\d]+/gi
  },
  cvv: {
    min: 3,
    max: 3,
    mask: '000',
    message: 'Código Inválido',
    regex: /[^\d]+/gi
  },
}

const useForm = (type: string) => {
  const [value, setValue] = React.useState<any>('');
  const [error, setError] = React.useState<string | null>(null);
  const [valid, setValid] = React.useState<boolean>(false);

  function invalid(): boolean {
    return value.length < inputTypes[type].min || value.length > inputTypes[type].max ? true : false;
  }

  function onKeyUp(event: any): void {
    mask(event.target, inputTypes[type].mask, event, inputTypes[type].regex);
    setValue(event.target.value);
  }

  function warn(): void {
    invalid() ? setError(inputTypes[type].message) : setError(null);
  }

  useEffect(() => {
    invalid() ? setValid(false) : setValid(true);
  }, [value])

  return {
    value,
    setValue,
    valid,
    error,
    onKeyUp,
    onFocus: () => setError(null),
    onBlur: () => warn(),
  };
};

export default useForm;
