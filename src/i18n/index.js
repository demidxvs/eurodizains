import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lv from "./lv.json";
import ru from "./ru.json";
import en from "./en.json";
import de from "./de.json";
import el from "./el.json";

i18n.use(initReactI18next).init({
  resources: {
    lv: { translation: lv },
    ru: { translation: ru },
    en: { translation: en },
    de: { translation: de },
    el: { translation: el },
  },
  lng: "lv",
  fallbackLng: "lv",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
