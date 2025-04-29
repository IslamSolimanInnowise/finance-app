import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/firebase";

// Define public routes that don't require authentication
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const user = auth.currentUser;

  if (
    path.startsWith("/_next") ||
    path.startsWith("/static") ||
    path.startsWith("/api") ||
    path.includes(".")
  ) {
    return NextResponse.next();
  }

  if (publicRoutes.includes(path) && user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!publicRoutes.includes(path) && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configure middleware matcher
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api (API routes)
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. all files in public folder
     */
    "/((?!api|_next|static|.*\\.).*)",
  ],
};
