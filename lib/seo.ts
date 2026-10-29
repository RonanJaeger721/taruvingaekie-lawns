import type { Metadata } from "next";

export const siteUrl = "https://www.ekiegardens.co.zw";
export const businessId = `${siteUrl}/#business`;
export const searchPages = [
  { slug: "durban-lawn", label: "Durban lawn", description: "Dense, lush lawn · US$4/m²" },
  { slug: "kikuyu-lawn", label: "Kikuyu lawn", description: "Hard-wearing, fast-growing · US$2/m²" },
  { slug: "bulk-lawn-supply", label: "Bulk lawn supply", description: "Large grounds, institutions & developments" },
  { slug: "lawn-delivery-installation-zimbabwe", label: "Delivery & installation", description: "Nationwide service & Harare farm collection" },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title: { absolute: `${title} | Ekie Gardens` },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_ZW", siteName: "Ekie Gardens", title, description, url, images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Ekie Gardens — Durban and Kikuyu instant lawn in Zimbabwe" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/opengraph-image`] },
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness", "@id": businessId, name: "Ekie Gardens", url: siteUrl,
      description: "Durban and Kikuyu instant lawn supplier at Plot 10 Amalinda Farm, Harare, with nationwide delivery and installation in Zimbabwe and bulk lawn supply.",
      logo: `${siteUrl}/media/ekie/ekie-gardens-logo-transparent.webp`,
      image: `${siteUrl}/media/ekie/durban-field.jpeg`, telephone: "+263772711588",
      address: { "@type": "PostalAddress", streetAddress: "Plot 10 Amalinda Farm", addressLocality: "Harare", addressCountry: "ZW" },
      areaServed: { "@type": "Country", name: "Zimbabwe" },
      contactPoint: ["+263772711588", "+263719711588"].map(telephone => ({ "@type": "ContactPoint", telephone, contactType: "sales", availableLanguage: "English", areaServed: "ZW" })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Instant lawn supply", itemListElement: [
        { "@type": "Offer", name: "Durban lawn per m²", url: `${siteUrl}/durban-lawn`, priceCurrency: "USD", price: "4.00", priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "USD", price: "4.00", unitCode: "MTK", unitText: "per square metre" }, itemOffered: { "@id": `${siteUrl}/durban-lawn#product` } },
        { "@type": "Offer", name: "Kikuyu lawn per m²", url: `${siteUrl}/kikuyu-lawn`, priceCurrency: "USD", price: "2.00", priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "USD", price: "2.00", unitCode: "MTK", unitText: "per square metre" }, itemOffered: { "@id": `${siteUrl}/kikuyu-lawn#product` } },
      ] },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Ekie Gardens", url: siteUrl, inLanguage: "en-ZW", publisher: { "@id": businessId } },
  ],
};
