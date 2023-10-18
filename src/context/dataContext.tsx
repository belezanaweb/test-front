import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react'

import { z } from 'zod'

import { api } from '@/api/httpsClient'
import { ICart, TABS } from '@/types'
import { CreditCardSchema } from '@/utils/creditCardSchema'

interface DataProviderProps {
  children: ReactNode
}

interface IDataContext {
  data: ICart | null
  tabActive: TABS
  setTabActive: React.Dispatch<React.SetStateAction<TABS>>
  goToNextTab: () => void
  formData: z.infer<typeof CreditCardSchema> | null
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof CreditCardSchema> | null>
  >
  submitForm: (() => void) | null
  setSubmitForm: (submitFunction: (() => void) | null) => void
}

const DataContext = createContext({} as IDataContext)

export const useDataContext = () => useContext(DataContext)

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<ICart | null>(null)
  const [tabActive, setTabActive] = useState<TABS>('bag')
  const [formData, setFormData] = useState<z.infer<
    typeof CreditCardSchema
  > | null>(null)
  const [submitForm, setSubmitForm] = useState<(() => void) | null>(null)

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

  const goToNextTab = useCallback(() => {
    switch (tabActive) {
      case 'bag':
        setTabActive('payment')
        break
      case 'payment':
        if (formData) {
          // Aqui você pode adicionar a validação do formulário
          // Se o formulário estiver válido:
          setTabActive('confirmation')
          // Senão, exiba uma mensagem de erro ou algo similar
        }
        break
      case 'confirmation':
        setTabActive('bag')
        break
      default:
        break
    }
  }, [tabActive, formData])

  const value = useMemo(
    () => ({
      data,
      tabActive,
      setTabActive,
      goToNextTab,
      formData,
      setFormData,
      submitForm,
      setSubmitForm,
    }),
    [
      data,
      tabActive,
      setTabActive,
      goToNextTab,
      formData,
      setFormData,
      submitForm,
      setSubmitForm,
    ]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
