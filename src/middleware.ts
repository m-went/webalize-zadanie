import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales } from './constants/locales'

const localeCodes = locales.map((l) => l.code.toLowerCase())
const defaultLocale = locales[0].code

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = localeCodes.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return NextResponse.next()

  const isInternal =
    pathname.startsWith('/admin') || pathname.startsWith('/api') || pathname.includes('.')

  if (isInternal) return NextResponse.next()

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
