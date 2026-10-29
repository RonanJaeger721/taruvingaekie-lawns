import type { MetadataRoute } from "next";
import { searchPages, siteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/contact", ...searchPages.map(page => `/${page.slug}`)].map(path => ({ url: `${siteUrl}${path}` }));
}
