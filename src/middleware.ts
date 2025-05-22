// src/middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  urlMappingStrategy: 'rewrite', // Using rewrite as it's often cleaner
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  // Matcher ensuring `public` folder assets and API routes are excluded
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|assets|sw.js).*)'],
};
