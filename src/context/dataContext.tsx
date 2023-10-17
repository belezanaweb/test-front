import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react'

import { api } from '@/api/httpsClient'
import { ICart, TABS } from '@/types'

interface DataProviderProps {
  children: ReactNode
}

interface IDataContext {
  data: ICart | null
  tabActive: TABS
  setTabActive: React.Dispatch<React.SetStateAction<TABS>>
}

const DataContext = createContext({} as IDataContext)

export const useDataContext = () => useContext(DataContext)

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<ICart | null>(null)
  const [tabActive, setTabActive] = useState<TABS>('bag')

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get('/')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }, [])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo(
    () => ({
      data,
      tabActive,
      setTabActive,
    }),
    [data, tabActive, setTabActive]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
