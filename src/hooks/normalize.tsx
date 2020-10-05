import { useCallback } from 'react';

const useNormalize = () => {
  const normalizeCardNumber = useCallback((cardNumber: string) => {
    return cardNumber.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ") || "";
  }, []);

  return { normalizeCardNumber };
};

export { useNormalize };
