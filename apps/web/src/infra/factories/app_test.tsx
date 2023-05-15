import { CartRepository } from "@/data/repositories/cart_repository"
import { CartResponse } from "@/domain/models/cart"
import { useEffect, useState } from "react"

interface TestProps {
  repository: CartRepository
}

export default function TestRepositoryComponent({repository}: TestProps) {
  const [data, setData] = useState<CartResponse>({} as CartResponse)

  useEffect(() => {

    async function handleData() {
      const data = await repository.fetchCartData()
    setData(data)
console.log(data);

    }

    handleData()
  }, [])


  return (
    <div>

      hello2


    </div>
  )
}