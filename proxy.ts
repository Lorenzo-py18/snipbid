import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPaths = [
    "/",
    "/login", "/signup", "/onboarding", "/forgot-password", "/reset-password",
    "/auth/callback",
    "/demo",
    "/llms.txt",
    "/q/", "/i/",
    "/handyman-quote-software", "/quote-to-invoice-software",
    "/home-service-quote-software", "/handyman-invoice-software",
    "/handyman-estimate-software",
    "/templates/", "/blog/",
    "/api/demo",
  ];
  const isPublic = publicPaths.some((p) =>
    p === "/" ? path === "/" : path.startsWith(p)
  );

  // Skip auth check entirely for public paths — avoids unnecessary Supabase calls
  // and prevents SEO pages from accidentally redirecting on network hiccups
  if (isPublic) {
    return NextResponse.next({ request });
  }

  // Auth check only for protected paths
  let supabaseResponse = NextResponse.next({ request });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|api/webhooks).*)"],
};
