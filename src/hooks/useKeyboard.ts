import { useEffect, useMemo } from 'react'
import { AppState, useStore } from '@/store'

export const useKeyboard = () => {
  const { appState, goToNextPage, goToPreviousPage, copyResult } = useStore()

  const shortcuts = useMemo(
    () => [
      {
        key: 'enter',
        action: goToNextPage,
        condition: () => appState === AppState.Input
      },
      {
        key: 'enter',
        action: copyResult,
        condition: () => appState === AppState.Result
      },
      {
        key: 'escape',
        action: goToPreviousPage,
        condition: () => appState !== AppState.Input
      }
    ],
    [appState, goToNextPage, goToPreviousPage, copyResult]
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const { key, action, condition } = shortcut

        if (event.key.toLowerCase() === key && condition()) {
          event.preventDefault()
          action()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts])
}

export default useKeyboard
