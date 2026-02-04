export const locales = [
  { code: 'pl', label: 'Polski' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
] as const

export type SupportedLocale = (typeof locales)[number]['code']
