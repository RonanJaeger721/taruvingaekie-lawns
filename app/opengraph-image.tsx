import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Ekie Gardens — instant lawn in Harare with nationwide delivery and installation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage() {
  const photo = await readFile(path.join(process.cwd(), "public/media/ekie/durban-field.jpeg"));
  return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#063d29", color: "#fff", padding: 60, position: "relative" }}>
    {/* A native share image, independent of social-account credentials. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`data:image/jpeg;base64,${photo.toString("base64")}`} alt="" width={450} height={630} style={{ position: "absolute", right: 0, top: 0, objectFit: "cover", opacity: 0.65 }}/>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
      <div style={{ fontSize: 30, letterSpacing: 4 }}>EKIE GARDENS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, maxWidth: 800 }}><span>Instant lawn.</span><span>Nationwide.</span></div><div style={{ fontSize: 31 }}>Durban US$4/m² · Kikuyu US$2/m²</div><div style={{ fontSize: 24 }}>Delivery & installation included</div></div>
      <div style={{ fontSize: 22 }}>Plot 10 Amalinda Farm, Harare · 077 271 1588</div>
    </div>
  </div>, size);
}
