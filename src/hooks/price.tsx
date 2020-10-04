import { useCallback } from 'react';

const usePrice = () => {
  const formatPrice = useCallback((price: number) => {
    return price.toFixed(2).replace(".", ",");
  }, []);

  return { formatPrice };
};

export { usePrice };
