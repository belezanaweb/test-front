import schema from './schema';

const validData = {
  number: '4444333322221111',
  holder: 'John Doe',
  expireDate: '12/2024',
  cvv: '123',
};

describe('Validation Schema', () => {
  it('should validate a valid credit card number', async () => {
    await expect(schema.validate(validData)).resolves.toBe(validData);
  });

  it('should throw an error for an invalid credit card number', async () => {
    await expect(
      schema.validate({
        ...validData,
        number: '1234567890123456',
        holder: 'John Doe',
      }),
    ).rejects.toThrow('O número do cartão é inválido.');
  });

  it('should throw an error for empty credit card number', async () => {
    await expect(
      schema.validate({
        ...validData,
        number: '',
      }),
    ).rejects.toThrow('O número do cartão é obrigatório.');
  });

  it('should throw an error for empty holder name', async () => {
    await expect(
      schema.validate({
        ...validData,
        holder: '',
      }),
    ).rejects.toThrow('O nome do titular é obrigatório.');
  });

  it('should throw an error for invalid holder name', async () => {
    await expect(
      schema.validate({
        ...validData,
        holder: 'John',
      }),
    ).rejects.toThrow('O nome do titular é inválido.');
  });

  it('should throw an error for empty expire date', async () => {
    await expect(
      schema.validate({
        ...validData,
        expireDate: '',
      }),
    ).rejects.toThrow('A data de validade é obrigatória.');
  });

  it('should throw an error for invalid expire date', async () => {
    await expect(
      schema.validate({
        ...validData,
        expireDate: '12/2020',
      }),
    ).rejects.toThrow('A data de validade é inválida.');
  });

  it('should throw an error for empty cvv', async () => {
    await expect(
      schema.validate({
        ...validData,
        cvv: '',
      }),
    ).rejects.toThrow('O código de segurança é obrigatório.');
  });

  it('should throw an error for invalid cvv', async () => {
    await expect(
      schema.validate({
        ...validData,
        cvv: '12',
      }),
    ).rejects.toThrow('O código de segurança é inválido.');
  });
});
