import axios from "axios";
import { useEffect, useState } from "react";
import { CartDataType } from "../../../types";

export const useCartProducts = () => {
  const [data, setData] = useState<CartDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);
      const cachedData = localStorage.getItem('cartData');

      if (!!cachedData) {
        setData(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios('https://www.mocky.io/v2/5b15c4923100004a006f3c07');
          setData(response.data);
          localStorage.setItem('cartData', JSON.stringify(response.data));
        } catch (error) {
          setHasError(true);
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, hasError };
};
