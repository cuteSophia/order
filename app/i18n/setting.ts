export const fallbackLang = "en-US";
export const languages = [fallbackLang]; // 暂时只有英文版  "ja-JP", "zh-TW"
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
