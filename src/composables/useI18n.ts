import { useI18n as vueUseI18n } from 'vue-i18n'

export function useI18n() {
  const { t, locale, availableLocales } = vueUseI18n()

  const changeLocale = (newLocale: string) => {
    if (availableLocales.includes(newLocale)) {
      locale.value = newLocale
      localStorage.setItem('locale', newLocale)
    }
  }

  return {
    t,
    locale,
    availableLocales,
    changeLocale
  }
}
