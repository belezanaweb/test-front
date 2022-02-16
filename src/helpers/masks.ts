export function creditCardMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})/g, '$1 ');
  value = value.replace(/\.$/, '');
  value = value.substring(0, 19);
  e.currentTarget.value = value;

  return e;
}

export function titularNameMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 20;
  let value = e.currentTarget.value;

  value = value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '');
  e.currentTarget.value = value;

  return e;
}

export function dateMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 7;
  let value = e.currentTarget.value;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1');
  e.currentTarget.value = value;

  return e;
}

export function cvvMask(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 3;
  let value = e.currentTarget.value;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1');
  e.currentTarget.value = value;

  return e;
}
