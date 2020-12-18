const mask = {
  creditCardNumber: (value: string) =>
    value
      .replace(/\D+/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || '',
  securityCode: (value: string) => value.replace(/\D+/g, '').substr(0, 4) || '',
  name: (value: string) => value.replace(/\d+/g, ''),
  expires: (value: string) =>
    value
      .replace(/\D+/g, '')
      .replace(/^(\d{2})(\d{4})/g, '$1/$2')
      .substr(0, 7) || '',
};

export default mask;
