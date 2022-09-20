import { createI18n } from "vue-i18n";
import store from "store2";

import en from "../locales/en.json";
import ar from "../locales/ar.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: store("lang"),
    fallbackLocale: "en", // set fallback locale
    messages: {
      "en-US": en,
      en,
      ar,
    },
  });

  vueApp.use(i18n);
});
