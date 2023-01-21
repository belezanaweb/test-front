export const cardNumberMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 21);

  if (value.length >= 16) {
    return `${value.slice(0, 4)}.${value.slice(4, 8)}.${value.slice(8, 12)}.${value.slice(12, 16)}`;
  }

  return value;
}

export const cardValidThroughMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 8);

  if (value.length >= 3) {
    return `${value.slice(0, 2)}/${value.slice(2, 6)}`;
  }

  return value;
}

export const cardCVVMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 3);
  return value;
}

export const fieldValidation = (value: string, lengthValidation?: number) => {
  let validation = true;

  if (!value || value?.length === 0) {
    validation = false;
  }

  if (lengthValidation && value.length < lengthValidation) {
    validation = false;
  }

  return validation;
}
