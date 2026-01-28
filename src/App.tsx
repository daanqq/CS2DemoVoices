import { ArrowLeft, ArrowRight, RefreshCcw } from "lucide-react";

import Footer from "@/components/Footer";
import ModeToggle from "@/components/ModeToggle";
import PlayersInput from "@/components/PlayersInput";
import Result from "@/components/Result";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import useKeyboard from "@/hooks/useKeyboard";
import { AppState, useStore } from "@/store";
import { ThemeProvider } from "@/theme";

const App = () => {
  const { i18n, appState, goToInputPage, goToPreviousPage, goToNextPage } = useStore();

  useKeyboard();

  return (
    <ThemeProvider>
      <div className="absolute inset-0 -z-10 bg-[url(/background.png)] bg-cover dark:brightness-10 brightness-50 dark:contrast-100 contrast-75" />
      <div className="font-play h-screen flex flex-col items-center justify-center">
        <div className="flex w-120 flex-grow flex-col justify-center gap-4">
          <div className="flex justify-between gap-2 w-full">
            <div className="flex gap-2">
              <ModeToggle />
              {appState !== AppState.Input && (
                <Button variant="outline" className="w-fit" onClick={() => goToPreviousPage()}>
                  <ArrowLeft />
                  {`${i18n.t("back")} (Esc)`}
                </Button>
              )}
              {appState !== AppState.Input && (
                <Button variant="outline" className="w-fit" onClick={() => goToInputPage()}>
                  <RefreshCcw />
                  {i18n.t("again")}
                </Button>
              )}
            </div>
            {appState !== AppState.Result && (
              <Button variant="outline" className="w-fit" onClick={() => goToNextPage()}>
                <ArrowRight />
                {`${i18n.t("next")} (Enter)`}
              </Button>
            )}
          </div>
          <div className="h-120">
            {appState === AppState.Input && <PlayersInput key="playersSelectCard" />}
            {appState === AppState.Result && <Result key="resultCard" />}
          </div>
        </div>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
};

export default App;
