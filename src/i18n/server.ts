// src/i18n/server.ts
import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
  pl: () => import('@/locales/pl'),
  en: () => import('@/locales/en'),
});
