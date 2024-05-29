import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./setting";

const initI18next = async (lang) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language) => import(`./locales/${language}.json`)))
    .init(getOptions(lang));
  return i18nInstance;
};

export async function useTranslation(lang, options = {}) {
  const i18nextInstance = await initI18next(lang);
  return {
    t: i18nextInstance.getFixedT(lang, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
