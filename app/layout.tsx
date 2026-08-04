import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Taruvingaekie | Premium Lawns & Landscapes",
  description: "Premium lawn supply, professional installation, lawn care and large-area mowing. Call or WhatsApp 077 271 1588.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${serif.variable}`}>{children}</body></html>;
}
