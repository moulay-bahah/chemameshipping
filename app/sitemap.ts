import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getSiteUrl();
  return [{ url: baseUrl.href, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
