import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { render } from "preact";

import App from "@/App";
import en from "./i18n/en.json";
import ru from "./i18n/ru.json";
import "./index.css";

i18next.use(LanguageDetector).init({
  supportedLngs: ["ru", "en"],
  resources: { ru, en },
});

render(
  <>
    <Analytics />
    <SpeedInsights />
    <App />
  </>,
  document.getElementById("root") as HTMLElement,
);
