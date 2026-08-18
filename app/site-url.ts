import { headers } from "next/headers";

const fallbackUrl = "http://localhost:3000";
const safeHostPattern = /^[a-z0-9.-]+(?::\d+)?$/i;

export async function getSiteUrl(): Promise<URL> {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) return new URL(configuredUrl);

  const incomingHeaders = await headers();
  const forwardedHost = incomingHeaders.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost ?? incomingHeaders.get("host")?.trim();

  if (!host || !safeHostPattern.test(host)) return new URL(fallbackUrl);

  const forwardedProtocol = incomingHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https"
    ? forwardedProtocol
    : host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https";

  return new URL(`${protocol}://${host}`);
}
