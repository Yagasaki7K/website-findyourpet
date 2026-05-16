import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	const pathname = request.nextUrl.pathname;

	if (pathname.startsWith("/_next/static") || pathname.startsWith("/images") || /\.(png|jpg|jpeg|webp|avif|svg|ico)$/.test(pathname)) {
		response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
	} else if (!pathname.startsWith("/api")) {
		response.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/image|favicon.ico).*)"],
};
