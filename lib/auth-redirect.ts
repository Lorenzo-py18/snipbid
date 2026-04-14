const DEFAULT_APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

function normalizeNextPath(nextPath: string) {
  if (!nextPath.startsWith("/")) {
    return "/dashboard";
  }

  return nextPath;
}

export function getAuthCallbackUrl(nextPath: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : DEFAULT_APP_URL;
  const url = new URL("/auth/callback", origin);

  url.searchParams.set("next", normalizeNextPath(nextPath));

  return url.toString();
}
