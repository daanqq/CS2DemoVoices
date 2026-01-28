import { create } from "zustand";
import i18n from "./i18n";
import { generateResultString } from "./utils";

export enum AppState {
  Input = 1,
  Result = 2,
}

export interface StoreState {
  appState: AppState;
  stringToParse: string;
  isInputInvalid: boolean;
  resultString: string;
  isResultCopied: boolean;
  i18n: ReturnType<typeof i18n>;
  setStringToParse: (stringToParse: string) => void;
  updateResultString: () => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToInputPage: () => void;
  goToResultPage: () => void;
  copyResult: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  appState: AppState.Input,
  stringToParse: "",
  isInputInvalid: false,
  resultString: "",
  isResultCopied: false,
  i18n: i18n(),
  setStringToParse: (stringToParse) => set({ isInputInvalid: false, stringToParse }),
  updateResultString: () => {
    const resultString = generateResultString(get().stringToParse);

    set({ resultString });
  },
  goToNextPage: () => {
    const appState = get().appState;

    const nextPageByAppState = {
      [AppState.Input]: get().goToResultPage,
      [AppState.Result]: () => null,
    }[appState];

    nextPageByAppState();
  },
  goToPreviousPage: () => {
    const appState = get().appState;

    if (appState === AppState.Input) return;

    set({
      appState: appState - 1,
    });
  },
  goToInputPage: () => {
    set({
      appState: AppState.Input,
      stringToParse: "",
      resultString: "",
    });
  },
  goToResultPage: () => {
    get().updateResultString();

    if (!get().resultString) {
      set({ isInputInvalid: true });

      return;
    }

    set({ isInputInvalid: false, appState: AppState.Result });
  },
  copyResult: async () => {
    await navigator.clipboard.writeText(get().resultString);

    set({ isResultCopied: true });
  },
}));
