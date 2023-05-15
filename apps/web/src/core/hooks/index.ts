import { CartResponse, GetCartDataUseCase } from "@/domain";
import { useEffect, useState } from "react";


export function useGetCartDataUseCase(useCase: GetCartDataUseCase) {
  const [cartData, setCardData] = useState({} as CartResponse)

  useEffect(() => {
    async function handleGetData() {
      const result = await useCase.invoke()
      setCardData(result)
      console.log(result);
    }

    handleGetData()
  }, [])

  return cartData
}