import { useEffect, useState } from 'react';
import { Cart } from '../models/cart';

const useLoadCart = (): Cart | null => {
  const [data, setData] = useState<Cart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd', { cache: "force-cache" });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useLoadCart;
