import { MetadataRoute } from "next";
import { client } from "../lib/sanity.client";
import { slugsByBrandQuery } from "../lib/sanity.queries";

const BASE = "https://www.mayenlegacy.com";

async function getBlogUrls(): Promise<MetadataRoute.Sitemap> {
  const brands = ["essentia", "alkalination"] as const;
  const urls: MetadataRoute.Sitemap = [];

  for (const brand of brands) {
    const slugs = await client.fetch<{ slug: { current: string }; language: string }[]>(
      slugsByBrandQuery,
      { brand }
    );
    for (const { slug, language } of slugs) {
      urls.push({
        url: `${BASE}/${brand}/blog/${slug.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: language === "es" ? 0.6 : 0.5,
      });
    }
  }

  return urls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogUrls = await getBlogUrls();

  return [
    { url: BASE,                           lastModified: new Date(), changeFrequency: "monthly", priority: 1   },
    { url: `${BASE}/essentia`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/alkalination`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/conferencista`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/essentia/blog`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/alkalination/blog`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    ...blogUrls,
  ];
}
