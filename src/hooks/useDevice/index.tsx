import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

export const useDeviceDetect = () => {
  const [useDeviceSize, setDeviceSize] = useState(window.innerWidth)
  const [isTablet, setTablet] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [isDesktop, setDesktop] = useState(false)
  const theme = useTheme()

  const handleResize = useCallback(() => {
    setDeviceSize(window.innerWidth)

    if (window.innerWidth < theme.breakpoint.mobile) {
      setMobile(true)
      setDesktop(false)
      setTablet(false)
      return
    }
    if (window.innerWidth >= theme.breakpoint.mobile && window.innerWidth <= theme.breakpoint.tablet) {
      setTablet(true)
      setMobile(false)
      setDesktop(false)
      return
    }

    setDesktop(true)
    setTablet(false)
    setMobile(false)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return { isMobile, isTablet, isDesktop, useDeviceSize }
}

export default useDeviceDetect
