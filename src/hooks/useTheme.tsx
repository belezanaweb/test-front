import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'

export interface CartDetailsProviderProps {
  children: ReactNode
}

export type CustomThemeOptions = 'light' | 'dark' | 'highContrast' | 'big'

export type CustomThemeProps = {
  customTheme: CustomThemeOptions
  handleCustomTheme: (theme: CustomThemeOptions) => void
}

export const CustomThemeInitialValues = {
  customTheme: '',
  handleCustomTheme: () => {}
}

export const CustomThemeContext = createContext<CustomThemeProps>(
  {} as CustomThemeProps
)

export function CustomThemeProvider({ children }: CartDetailsProviderProps) {
  const [customTheme, setCustomTheme] = useState<CustomThemeOptions>('light')

  const handleCustomTheme = (theme: CustomThemeOptions) => {
    setCustomTheme(theme)
  }

  return (
    <CustomThemeContext.Provider
      value={{
        customTheme,
        handleCustomTheme
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  )
}

export function useCustomTheme(): CustomThemeProps {
  const context = useContext(CustomThemeContext)

  return context
}
