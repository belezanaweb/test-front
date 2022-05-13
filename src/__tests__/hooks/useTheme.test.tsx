import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useCustomTheme, CustomThemeProvider } from '../../hooks/useTheme'
import { setStorageItem } from '../../util/localStorage'

describe('useCustomTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return items and its info', async () => {
    const wrapper = ({ children }: any) => (
      <CustomThemeProvider>{children}</CustomThemeProvider>
    )

    setStorageItem('ThemeMock', ['1'])

    const { result } = renderHook(() => useCustomTheme(), {
      wrapper
    })

    expect(result.current.customTheme).toBe('light')
  })
})
