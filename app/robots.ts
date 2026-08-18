import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", baseUrl).href,
  };
}
