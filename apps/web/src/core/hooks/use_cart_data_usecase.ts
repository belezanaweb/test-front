import { CartModel, GetCartDataUseCase } from "@/domain";
import { useEffect, useState } from "react";

export function useGetCartDataUseCase(useCase: GetCartDataUseCase) : CartModel {
  const [cartData, setCardData] = useState({} as CartModel)

  useEffect(() => {
    async function handleGetData() {
      const result = await useCase.invoke()
      setCardData(result)
    }

    handleGetData()
  }, [])

  return cartData
}

