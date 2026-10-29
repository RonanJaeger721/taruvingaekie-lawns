import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import "./seo.css";
import { businessSchema, siteUrl } from "../lib/seo";
import { StructuredData } from "./StructuredData";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Instant Lawn for Sale in Harare, Zimbabwe | Ekie Gardens", template: "%s | Ekie Gardens" },
  description: "Buy Durban lawn at US$4/m² or Kikuyu at US$2/m² from Ekie Gardens, Harare. Nationwide delivery and installation included. Home gardens and bulk supply.",
  applicationName: "Ekie Gardens",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
  icons: {
    icon: [{ url: "/ekie-tools-icon.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/ekie-tools-icon.png",
    apple: "/ekie-apple-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZW"><body className={`${manrope.variable} ${serif.variable}`}><StructuredData data={businessSchema}/>{children}</body></html>;
}
