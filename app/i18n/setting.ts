export const fallbackLang = "en-US";
export const languages = [fallbackLang];
export const langCookieName = "lang";
export const defaultNS = "";

export function getOptions(lng = fallbackLang) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng: fallbackLang,
    lng,
    fallbackNS: defaultNS,
  };
}
