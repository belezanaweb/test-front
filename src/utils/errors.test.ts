import { ValidationError } from 'yup';
import { formatError, formatErrors } from './errors';

describe('formatError', () => {
  it('should be able format error correctly', () => {
    // Arrange
    const message = 'Erro!';

    const error = new ValidationError(message, '', 'name');

    // Act
    const formattedError = formatError(error);

    // Asert
    expect(formattedError).toStrictEqual({ name: 'Erro!' });
  });
});

describe('formatErrors', () => {
  it('should be able format errors correctly', () => {
    // Arrange
    const message = 'Erro!';

    const errors = new ValidationError('Main error!', '', '');
    errors.inner = [
      new ValidationError(message, '', 'name'),
      new ValidationError(message, '', 'email'),
    ];

    // Act
    const formattedError = formatErrors(errors);

    // Asert
    expect(formattedError).toStrictEqual({ name: 'Erro!', email: 'Erro!' });
  });
});
