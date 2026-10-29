import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { lawnPages } from "../../lib/lawn-pages";
import { businessId, pageMetadata, searchPages, siteUrl } from "../../lib/seo";
import { StructuredData } from "../StructuredData";

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(lawnPages).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = lawnPages[slug];
  if (!page) notFound();
  return pageMetadata(page.title, page.description, `/${slug}`);
}

export default async function LawnGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = lawnPages[slug];
  if (!page) notFound();
  const quoteLink = page.lawn ? `/?lawn=${page.lawn}#quote` : "/#quote";
  const url = `${siteUrl}/${slug}`;
  const message = encodeURIComponent(`Hi Ekie Gardens! I would like a quote for ${page.lawn ? `${page.lawn} lawn` : "lawn supply"}. My location is: . My area is: m².`);
  const schema = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": `${url}#page`, url, name: page.title, description: page.description, isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": businessId }, breadcrumb: { "@id": `${url}#breadcrumb` } },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Ekie Gardens", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: page.title, item: url }] },
      ...(page.price ? [{ "@type": "Product", "@id": `${url}#product`, name: `${page.lawn === "durban" ? "Durban" : "Kikuyu"} lawn`, description: page.intro, image: `${siteUrl}/media/ekie/${page.image}`, brand: { "@type": "Brand", name: "Ekie Gardens" }, offers: { "@type": "Offer", url, price: page.price.toFixed(2), priceCurrency: "USD", seller: { "@id": businessId }, priceSpecification: { "@type": "UnitPriceSpecification", price: page.price.toFixed(2), priceCurrency: "USD", unitCode: "MTK", unitText: "per square metre" } } }] : [{ "@type": "Service", name: page.title, serviceType: slug === "bulk-lawn-supply" ? "Bulk instant lawn supply" : "Lawn delivery and installation", provider: { "@id": businessId }, areaServed: { "@type": "Country", name: "Zimbabwe" }, url }]),
    ],
  };
  return <main className={`lawn-guide guide-${slug}`}>
    <StructuredData data={schema}/>
    <Link prefetch={false} className="skip-link" href="#guide-content">Skip to lawn information</Link>
    <header className="guide-nav"><Link prefetch={false} href="/" aria-label="Ekie Gardens home" className="guide-brand"><Image src="/media/ekie/ekie-gardens-logo-light.webp" alt="Ekie Gardens" width={250} height={68} sizes="(max-width: 600px) 180px, 250px"/></Link><nav aria-label="Page navigation"><Link prefetch={false} href="/#lawns">Our lawns</Link><Link prefetch={false} href="/contact">Contact & directions</Link><Link prefetch={false} className="guide-nav-cta" href={quoteLink}>Plan your lawn ↗</Link></nav></header>
    <nav className="guide-breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{searchPages.find(item => item.slug === slug)?.label}</span></nav>
    <section className="guide-hero" id="guide-content"><div className="guide-hero-copy"><p className="section-number">{page.eyebrow}</p><h1>{page.heading}<br/><em>{page.accent}</em></h1><p className="guide-lead">{page.intro}</p><ul className="guide-facts">{page.facts.map(fact => <li key={fact}>{fact}</li>)}</ul><Link prefetch={false} href={quoteLink} className="guide-action">{page.price ? "Calculate your lawn estimate" : "Plan your lawn supply"}<span aria-hidden="true">↗</span></Link></div><figure><Image src={`/media/ekie/${page.image}`} alt={page.imageAlt} fill sizes="(max-width: 800px) 100vw, 48vw" quality={60} priority/><figcaption>{page.imageLabel}</figcaption></figure></section>
    <div className="guide-editorial">{page.sections.map((section, i) => <section className="guide-chapter" key={section.title}><div><span className="section-number">0{i + 1} / The details</span><h2>{section.title}</h2></div><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map(item => <li key={item}>{item}</li>)}</ul>}{i === 1 && <Link prefetch={false} className="text-link" href={quoteLink}>Open the lawn calculator <span aria-hidden="true">↗</span></Link>}</div></section>)}</div>
    <section className="guide-questions"><div><span className="section-number">Before you order</span><h2>Your questions.<br/><em>Answered.</em></h2></div><div>{page.questions.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
    <section className="guide-enquiry"><div><p className="section-number">From our farm to your space</p><h2>Tell us what<br/><em>you have in mind.</em></h2><p>Send your location, lawn choice and measurements.<br/>Our team confirms availability and your final quote.</p></div><div className="guide-contacts">{[{ display: "077 271 1588", number: "263772711588" }, { display: "071 971 1588", number: "263719711588" }].map(contact => <div key={contact.number}><Link prefetch={false} href={`tel:+${contact.number}`}>{contact.display}</Link><div><Link prefetch={false} href={`https://wa.me/${contact.number}?text=${message}`} target="_blank" rel="noreferrer">WhatsApp ↗</Link><Link prefetch={false} href={`tel:+${contact.number}`}>Call ↗</Link></div></div>)}<p>Plot 10 Amalinda Farm, Harare.<br/>Call ahead for collection and entrance directions.</p><Link prefetch={false} href="/contact" className="text-link">Contact & farm directions <span>↗</span></Link></div></section>
    <section className="guide-related"><h2>Keep exploring.</h2><nav aria-label="Related lawn information">{searchPages.filter(item => item.slug !== slug).map(item => <Link prefetch={false} key={item.slug} href={`/${item.slug}`}><span>{item.label}</span><small>{item.description}</small><b aria-hidden="true">↗</b></Link>)}</nav></section>
    <div className="guide-footer"><Link prefetch={false} href="/">← Ekie Gardens home</Link><Link prefetch={false} href="https://wa.me/263789937251">Website built & developed by Jaeger Media</Link></div>
  </main>;
}
