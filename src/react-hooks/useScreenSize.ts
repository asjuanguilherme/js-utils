import { useEffect, useState } from 'react'
import { UserAgent } from 'express-useragent'

type ScreenSize = {
  height: number
  width: number
}

export type UseScreenSizeProps = () => ScreenSize

export const useScreenSize: UseScreenSizeProps = () => {
  const userAgent = new UserAgent().parse(navigator.userAgent)

  const isMobile = userAgent.isMobile || userAgent.isTablet

  const [currentScreen, setCurrentScreen] = useState<ScreenSize>({
    height: isMobile ? 480 : 720,
    width: isMobile ? 320 : 1250,
  })

  useEffect(() => {
    setCurrentScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handler = () => {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      setCurrentScreen(size)
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  return currentScreen
}
