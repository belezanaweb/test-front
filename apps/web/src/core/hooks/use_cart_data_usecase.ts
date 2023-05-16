import { CartResponse, GetCartDataUseCase } from "@/domain";
import { useEffect, useState } from "react";

export function useGetCartDataUseCase(useCase: GetCartDataUseCase) : CartResponse {
  const [cartData, setCardData] = useState({} as CartResponse)

  useEffect(() => {
    async function handleGetData() {
      const result = await useCase.invoke()
      setCardData(result)
    }

    handleGetData()
  }, [])

  return cartData
}

