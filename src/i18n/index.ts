import rosetta from "rosetta";
import en from "../i18n/en.json";
import ru from "../i18n/ru.json";

const languages = { en, ru };

type LanguageCode = keyof typeof languages;

const getUserLanguage = (languages: string[], fallback: LanguageCode = "en"): LanguageCode => {
  const saved = localStorage.getItem("lang") as LanguageCode | null;
  if (saved && languages.includes(saved)) return saved;

  const browserLangs = navigator.languages || [navigator.language || fallback];

  for (const lang of browserLangs) {
    const shortLang = lang.split("-")[0] as LanguageCode;
    if (languages.includes(shortLang)) {
      return shortLang;
    }
  }

  return fallback;
};

export const i18n = () => {
  const i18n = rosetta(languages);

  const supported = Object.keys(languages);
  const lang = getUserLanguage(supported, "en");

  i18n.locale(lang);

  return i18n;
};

export default i18n;
