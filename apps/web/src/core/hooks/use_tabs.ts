import { CartTabKeysType } from "@/presentation/products_list/components"
import { useCallback, useMemo, useState } from "react"

type TabsDataType = {
  title: string
  key: CartTabKeysType
}

export type TabsDataArrayType = TabsDataType[]

export function useTabs() {
  const [tabKey, setTabKey] = useState<CartTabKeysType>('bag')

  const tabsData = useMemo(
    () => [
      {
        title: 'Sacola',
        key: 'bag'
      },
      {
        title: 'Pagamento',
        key: 'payment'
      },
      {
        title: 'Confirmação',
        key: 'confirmation'
      }
    ] as TabsDataArrayType,
    []
  )

  const onChangeTab = useCallback((tabKey: CartTabKeysType) => {
    setTabKey(tabKey)
  }, [])

  return {
    tabKey,
    setTabKey,
    tabsData,
    onChangeTab
  }
}