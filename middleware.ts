import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const PRIMARY_HOST = "codewithseth.co.ke"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1")
  const skipEnforcement = process.env.NEXT_PUBLIC_SKIP_HOST_REDIRECT === "1"

  if (isLocal || skipEnforcement) {
    return NextResponse.next()
  }

  if (host !== PRIMARY_HOST) {
    const url = req.nextUrl.clone()
    url.hostname = PRIMARY_HOST
    url.protocol = "https"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
