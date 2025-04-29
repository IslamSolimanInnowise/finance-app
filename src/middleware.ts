import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = ["/login", "/register"];

  if (
    pathname.startsWith("/_next") || // Next.js system files
    pathname.startsWith("/api") || // API routes
    pathname.startsWith("/static") || // Static files
    pathname.includes(".") // Files with extensions (images, etc.)
  ) {
    return NextResponse.next();
  }

  // If trying to access protected routes without auth, redirect to login
  if (!publicRoutes.includes(pathname) && !authCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If trying to access auth pages (login/register) while authenticated, redirect to home
  if (publicRoutes.includes(pathname) && authCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  //   matcher: ["/dashboard", "/login", "/register"],
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
