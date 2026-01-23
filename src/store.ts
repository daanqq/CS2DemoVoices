import i18next from "i18next";
import { type ToastT, toast } from "sonner";
import { create } from "zustand";
import { generateResultString } from "./utils";

export enum AppState {
  Input,
  Result,
}

export interface StoreState {
  appState: AppState;
  stringToParse: string;
  resultString: string;
  latestToastId: ToastT["id"] | null;
  setAppState: (appState: AppState) => void;
  setStringToParse: (stringToParse: string) => void;
  setLatestToastId: (latestToastId: ToastT["id"]) => void;
  showToast: (text: string) => void;
  dismissLatestToast: () => void;
  updateResultString: () => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToInputPage: () => void;
  goToResultPage: () => void;
  copyCommand: () => void;
  copyResult: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  appState: AppState.Input,
  stringToParse: "",
  resultString: "",
  latestToastId: null,
  setAppState: (appState) => set({ appState }),
  setStringToParse: (stringToParse) => set({ stringToParse }),
  setLatestToastId: (latestToastId) => set({ latestToastId }),
  showToast: (text) => {
    const latestToastId = toast.success(i18next.t(text));

    get().dismissLatestToast();
    get().setLatestToastId(latestToastId);
  },
  dismissLatestToast: () => {
    const latestToastId = get().latestToastId;

    if (latestToastId) toast.dismiss(latestToastId);
  },
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
    get().dismissLatestToast();

    if (!get().resultString) {
      get().showToast("atLeastOne");

      return;
    }

    set({ appState: AppState.Result });
  },
  copyCommand: async () => {
    await navigator.clipboard.writeText("voice_show_mute");

    get().showToast("copied");
  },
  copyResult: async () => {
    await navigator.clipboard.writeText(get().resultString);

    get().showToast("copied");
  },
}));
