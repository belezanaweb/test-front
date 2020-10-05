import { useCallback } from 'react';

const useNormalize = () => {
  const normalizeCardNumber = useCallback((cardNumber: string) => {
    return cardNumber.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ") || "";
  }, []);

  const normalizeDate = useCallback((date: string) => {
    if (date.length >= 4) {
      return date;
    }

    return date.replace(/\s/g, "").match(/.{1,2}/g)?.join('/') || "";
  }, []);

  return { normalizeCardNumber, normalizeDate };
};

export { useNormalize };
