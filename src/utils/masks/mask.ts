export const handleCardNumberMask = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})(\d)/g, "$1 $2");
  value = value.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
  value = value.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
  e.currentTarget.value = value;
};

export const handleDateMonthYear = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 5;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "$1/$2");
  e.currentTarget.value = value;
};

export const handleCvcMask = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 3;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  e.currentTarget.value = value;
};
