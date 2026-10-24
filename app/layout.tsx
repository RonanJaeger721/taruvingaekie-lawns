import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./refinements.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ekie Gardens | Durban & Kikuyu Lawn, Delivered Nationwide",
  description: "Durban lawn $4/m² and Kikuyu lawn $2/m². Delivery and installation included nationwide. Bulk supply and collection at Plot 10 Amalinda Farm, Harare. Call or WhatsApp 0772711588 or 0719711588.",
  icons: {
    icon: [{ url: "/ekie-tools-icon.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/ekie-tools-icon.png",
    apple: "/ekie-apple-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${serif.variable}`}>{children}</body></html>;
}
