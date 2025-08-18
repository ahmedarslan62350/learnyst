// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of allowed IPs
export function middleware(req: NextRequest) {
  console.log(`Request from IP: ${req.headers.get('x-forwarded-for') || req.ip || 'unknown'}`);
  
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown'

  const url = req.nextUrl.clone()
  const pathname = url.pathname

  // Apply only to restricted routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/upload-gazette')) {
    // if (!allowedIPs.includes(ip)) {
    //   url.pathname = '/404'
    //   return NextResponse.redirect(url)
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/:path*'],
}
