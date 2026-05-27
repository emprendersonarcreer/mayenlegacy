import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// next-intl middleware handles locale context for prefixed routes (/en/*)
const intlMiddleware = createMiddleware(routing);

const locales = ["es", "en"];
const defaultLocale = "es";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Route already has a locale prefix (e.g. /en, /en/essentia/blog)
    // Use next-intl middleware so usePathname() strips it correctly
    return intlMiddleware(request);
  }

  // No locale prefix → default locale (es)
  // Rewrite internally so [locale] param = "es" in App Router
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|studio|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
