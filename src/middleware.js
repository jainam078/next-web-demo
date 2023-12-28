import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
}

export const config = {
  matcher: ['/']
}