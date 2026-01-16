import { useEffect } from 'react'
import { useStore, AppState } from '@/store'

export interface KeyboardShortcut {
  key: string
  action: () => void
  description: string
  condition?: () => boolean
}

export const useKeyboard = () => {
  const {
    appState,
    goToNextPage,
    goToPreviousPage,
    copyResult
  } = useStore()

  const shortcuts: KeyboardShortcut[] = [
    {
      key: 'Enter',
      action: goToNextPage,
      description: 'Перейти к результату',
      condition: () => appState === AppState.Input,
    },
    {
      key: 'Enter',
      action: copyResult,
      description: 'Копировать результат',
      condition: () => appState === AppState.Result,
    },
    {
      key: 'Escape',
      action: goToPreviousPage,
      description: 'Назад',
      condition: () => appState !== AppState.Input,
    }
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const {
          key,
          condition = () => true,
          action
        } = shortcut

        const matchesKey = event.key.toLowerCase() === key.toLowerCase()

        if (matchesKey && condition()) {
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
