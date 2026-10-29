# Ekie Gardens search visibility

Canonical website: https://www.ekiegardens.co.zw/

## Implemented in the website

- Six indexable pages: home, contact, Durban lawn, Kikuyu lawn, bulk supply, and delivery/installation.
- Distinct search titles, descriptions and canonical URLs; consistent social-share metadata.
- Server-rendered buying information, questions, measurement examples and direct quote links.
- LocalBusiness/WebSite structured data; Product/Offer and breadcrumbs on variety pages; Service data on supply/delivery pages. Prices use USD per square metre. No invented ratings, precise coordinates, opening hours, availability or social profiles.
- `/robots.txt` and a canonical `/sitemap.xml`; a 1200×630 PNG share image.
- Responsive images and opt-in video/Maps retained.
- Optional `GOOGLE_SITE_VERIFICATION` environment variable adds the actual Search Console HTML verification token when supplied. No token has been invented or registration claimed.

## Account-dependent launch steps — not completed by code changes

1. In Google Search Console, add the URL-prefix property `https://www.ekiegardens.co.zw/` using the client-controlled Google account. Alternatively, verify the domain property `ekiegardens.co.zw` through its DNS provider to cover all hostnames and protocols. Do not alter existing DNS records unnecessarily.
2. Use the HTML-tag verification method. Add only the supplied verification token as `GOOGLE_SITE_VERIFICATION` on the correct Vercel project, rebuild, and finish verification in Search Console. Do not paste passwords or authentication secrets into source control.
3. Submit `https://www.ekiegardens.co.zw/sitemap.xml`, inspect the six canonical pages and request indexing where appropriate. This requests crawling; it does not guarantee indexing or placement.
4. Claim/verify the real Ekie Gardens Google Business Profile if one exists, or create it with the client's permission. Avoid duplicate listings. Use accurate client-confirmed address, category, visiting arrangements and service area. Confirm the real farm entrance, actual hours and storefront/service-area eligibility before publishing them.
5. Use both confirmed phone numbers, the canonical website link, the supplied logo and genuine farm/harvest photographs. Keep business name and address consistent across Facebook and other real listings. Add social links only after the client supplies the official profile URLs.
6. Invite real customers to leave honest reviews and reply to them. Do not buy or fabricate reviews, links or keyword-stuffed business names.
7. Monitor indexing, search impressions, queries, clicks and enquiries. Check whether relevant visits convert to WhatsApp conversations, not only whether a broad keyword appears.

## Content opportunities that need client input

Actual site-preparation scope, planting/aftercare instructions, confirmed availability, delivery timing, verified customer project photos, opening hours and exact farm pin. Publish only when supplied and checked. Do not generate near-identical city pages or claim local offices that do not exist.

The custom domain is connected to Vercel. The bare domain redirects to `www`, and all canonical URLs, structured-data identifiers, sitemap and social metadata use `www.ekiegardens.co.zw`. The legacy Vercel hostname remains accessible with canonical tags pointing to the custom domain. Search Console verification and submission must use the custom domain; this release does not claim that Google has indexed it.

## Checks

`npm test` builds the production site and tests all six rendered pages, metadata, JSON-LD, pricing, internal links, sitemap, robots, social image, media restraint and 404 behavior. `npm run test:seo` tests an existing build. To check the public release in PowerShell:

```powershell
$env:SEO_BASE_URL='https://www.ekiegardens.co.zw'
npm.cmd run test:seo
Remove-Item Env:SEO_BASE_URL
```

The older `tests/rendered-html.test.mjs` belongs to the unmodified starter skeleton; it is retained for provenance, not used as the site's production test suite.

## Official guidance

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://support.google.com/business/answer/7091

No ranking, discovery date, rich result or lead volume is guaranteed. Technical readiness is distinct from Google account verification, crawling, indexing and ranking.
