import i18next from 'i18next'
import { type ToastT, toast } from 'sonner'
import { create } from 'zustand'

export enum AppState {
  Input,
  Result
}

export interface StoreState {
  appState: AppState
  stringToParse: string
  resultString: string
  latestToastId: ToastT['id'] | null
  setAppState: (appState: AppState) => void
  setStringToParse: (stringToParse: string) => void
  setLatestToastId: (latestToastId: ToastT['id']) => void
  showToast: (text: string) => void
  dismissLatestToast: () => void
  generateResultString: () => void
  goToNextPage: () => void
  goToPreviousPage: () => void
  goToInputPage: () => void
  goToResultPage: () => void
  copyCommand: () => void
  copyResult: () => void
}

export const useStore = create<StoreState>((set, get) => ({
  appState: AppState.Input,
  stringToParse: '',
  isPlayerNeeded: true,
  playerName: '',
  selectedValues: new Set([]),
  resultString: '',
  latestToastId: null,
  setAppState: (appState) => set({ appState }),
  setStringToParse: (stringToParse) => set({ stringToParse }),
  setLatestToastId: (latestToastId) => set({ latestToastId }),
  showToast: (text) => {
    const latestToastId = toast.success(i18next.t(text))

    get().dismissLatestToast()
    get().setLatestToastId(latestToastId)
  },
  dismissLatestToast: () => {
    const latestToastId = get().latestToastId

    if (latestToastId) toast.dismiss(latestToastId)
  },
  generateResultString: () => {
    const stringToParse = get().stringToParse
    const specNumbers = stringToParse.match(/-?\d+(\.\d+)?/g)?.map(Number);

    if (!specNumbers) {
      set({ resultString: '' })

      return
    }

    const indicesNumbers = specNumbers.map((number) => number - 1)
    const indicesValue = [...indicesNumbers].reduce(
      (playerValuesSum, playerValue) => playerValuesSum + 2 ** playerValue,
      0
    )

    set({ resultString: `tv_listen_voice_indices ${indicesValue}` })
  },
  goToNextPage: () => {
    const appState = get().appState

    const nextPageByAppState = {
      [AppState.Input]: get().goToResultPage,
      [AppState.Result]: () => null
    }[appState]

    nextPageByAppState()
  },
  goToPreviousPage: () => {
    const appState = get().appState

    if (appState === AppState.Input) return

    set({
      appState: appState - 1
    })
  },
  goToInputPage: () => {
    set({
      appState: AppState.Input,
      stringToParse: '',
      resultString: ''
    })
  },
  goToResultPage: () => {
    get().generateResultString()
    get().dismissLatestToast()

    if (!get().resultString) {
      get().showToast('atLeastOne')

      return
    }

    set({ appState: AppState.Result })
  },
  copyCommand: async () => {
    await navigator.clipboard.writeText('voice_show_mute')

    get().showToast('copied')
  },
  copyResult: async () => {
    await navigator.clipboard.writeText(get().resultString)

    get().showToast('copied')
  }
}))
