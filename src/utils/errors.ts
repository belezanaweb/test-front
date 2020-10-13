import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export const formatErrors = (errors: ValidationError): Error => {
  return errors.inner.reduce((acc: Error, error: ValidationError) => {
    return { ...acc, ...formatError(error) };
  }, {});
};

export const formatError = (error: ValidationError): Error => {
  return { [error.path]: error.message };
};
