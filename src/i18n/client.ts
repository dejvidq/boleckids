// src/i18n/client.ts
import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = createI18nClient({
  pl: () => import('@/locales/pl'),
  en: () => import('@/locales/en'),
});
